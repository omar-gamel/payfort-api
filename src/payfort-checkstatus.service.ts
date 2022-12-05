import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PayfortService } from './payfort.service';
@Injectable()
export class PayfortCheckStatusService {
  constructor(private readonly payfortService: PayfortService) {}

  /*
    REQUEST PARAMS :
        1- query_command 
            - expected values: CHECK_STATUS
            - Alpha
            - Mandatory
            - max: 50	 
        2- access_code
            - Example: zx0IPmPy5jp1vAz
            - Alphanumeric
            - Mandatory
            - Max: 20
        3- merchant_identifier
            - The ID of the Merchant
            - Alphanumeric
            - Example: CycHZxVj
            - Mandatory
            - Max: 20
        4- merchant_reference
            - The Merchant’s unique order number
            - Special characters: - _ .
            - Numeric
            - Example: XYZ9239-yu898
            - Mandatory
            - Max: 20   
        5- language
            - The checkout page and messages language
            - Alpha
            - Expected values: en/ ar
            - Mandatory
            - Max: 2
        6- signature
            - A string hashed using the Secure Hash Algorithm
            - Alphanumeric
            - Example: 7cad05f0212ed933c9a5d5dffa31661acf2c827a
            - Don't include parameters if using Merchant Page 2.0 tokenization request: card_security_code, card number, expiry_date, card_holder_name, remember_me
            - Mandatory
            - Max: 200 
        7- fort_id
            - The order’s unique reference returned by our system
            - Numeric
            - Optional
            - Example: 149295435400084008
            - Max: 20  
        8- return_third_party_response_codes
            - This parameter allows you to return the 3rd party response codes in the transaction’s response
            - Alpha
            - - Expected values:
                - YES
                - NO 
            - Optional
            - Max: 3

    RESPONSE OBJECT :
        1- response_message
            - Message description of the response code. It returns according to the request language
            - Alphanumeric
            - Expected values: (Please refer to section messages)
            - Max: 150
        2- response_code
            - Response Code carries the value of our system’s response.
            - The code consists of five digits, the first 2 digits represent the response status, and the last 3 digits represent the response messages
            - Numeric
            - Example: 20064
            - Max: 5
        3- status
            - A two-digit numeric value that indicates the status of the transaction
            - Numeric
            - Expected values: (Please refer to section statuses)
            - Max: 2
        4- transaction_status
            - The status of the last operation performed on a specific order.
            - Numeric
            - Expected values: (Please refer to section statuses)
            - Max: 2
        5- transaction_code
            - The message code returned for the last operation performed on a specific order
            - Numeric
            - Expected values: (Please refer to section messages)
            - Max: 5
        6- transaction_message
            - The message returned for the last operation performed on a specific order
            - Alphanumeric
            - Example: Success
            - Max: 150
        7- authorized_amount
            - The total authorized amount for the order
            - Numeric
            - Example: 10000
            - Max: 10
        8- authorization_code
            - Authorization Code returned from the 3rd party.
            - Alphanumeric
            - Example: 017201
            - Max: 100 
        9- fort_id
            - The order’s unique reference returned by our system
            - Numeric
            - Example: 149295435400084008
            - Max: 20        
    */

  public async payfortCheckStatusRequest(checkStatusRequestDto: {
    merchant_reference: string;
    language: PayfortLanguageEnum;
    fort_id?: number;
    return_third_party_response_codes?: PayfortReturnThirdPartyResponseCodesEnum;
  }) {
    const { merchant_reference, language, fort_id, return_third_party_response_codes } =
      checkStatusRequestDto;
    const params = {
      query_command: PayfortCommandEnum.CHECK_STATUS,
      access_code: process.env.PAYFORT_ACCESS_CODE,
      merchant_identifier: process.env.PAYFORT_MERCHANT_IDENTIFIER,
      merchant_reference,
      language,
      ...(fort_id && { fort_id }),
      ...(return_third_party_response_codes && { return_third_party_response_codes })
    };
    const signature = this.payfortService.createSignature(params);
    try {
      return await axios({
        method: 'POST',
        url: process.env.PAYFORT_CHECK_STATUS_URL,
        headers: {
          'Content-Type': 'application/json'
        },
        data: { ...params, signature }
      });
    } catch (error) {}
  }
}
