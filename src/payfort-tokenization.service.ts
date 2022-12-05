import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PayfortService } from './payfort.service';

@Injectable()
export class PayfortTokenizationService {
  constructor(private readonly payfortService: PayfortService) {}
  /*
    REQUEST PARAMS :
        1- service_command 
            - Alpha
            - Expected values: TOKENIZATION
            - Mandatory
            - max: 20	 
        2- access_code
            - Alphanumeric
            - Example: zx0IPmPy5jp1vAz
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
            - Alphanumeric
            - Special characters: - _ .
            - Example: XYZ9239-yu898
            - Mandatory
            - Max: 20    
        5- language
            - The checkout page and messages language
            - Alpha
            - Expected values: en/ ar
            - Mandatory
            - Max: 2
        6- expiry_date
            - The card’s expiry date.
            - Numeric
            - Example: 2105
            - Mandatory
            - Max: 4
        7- card_number
            - The clear credit card’s number
            - Only the MEEZA payment option takes 19 digits card number 
            - AMEX payment option takes 15 digits card number 
            - Otherwise, they take 16 digits card number
            - Numeric
            - Example: 4005550000000001
            - Mandatory
            - Max: 19   
        8- card_security_code
            - A security code for the card. * Only AMEX accepts card security code of 4 digits
            - Numeric
            - Example: 123
            - Mandatory
            - Max: 4
        9- signature
            - A string hashed using the Secure Hash Algorithm
            - Alphanumeric
            - Example: 7cad05f0212ed933c9a5d5dffa31661acf2c827a
            - Don't include parameters if using Merchant Page 2.0 tokenization request: card_security_code, card number, expiry_date, card_holder_name, remember_me
            - Mandatory
            - Max: 200 
        10-  token_name?
            - The Token received from the Tokenization process
            - Alphanumeric
            - Example: Op9Vmp
            - Optional
            - Max: 100      
        11- card_holder_name?
            - The card holder name
            - Alpha
            - Example: John Smith
            - Optional
            - Max: 50      
        12- remember_me?
            - This parameter provides you with an indication to whether to save this token for the user based on the user selection
            - Alpha
            - Expected values: -YES -NO
            - Optional
            - Max: 3                      
        13- return_url?
            - The URL of the Merchant’s page to be displayed to the customer when the order is processed
            - Alphanumeric
            - Example: https://www.merchant.com
            - Optional
            - Max: 400  

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
        4- card_bin
            - The first 6 digits of the card number
            - If the card number for MEEZA was of length 19 then the card bin will be the first 8 digits
            - Numeric
            - Example: 478773
            - Max: 8	  
        4- token_name
            -  The token received from the Tokenization process
            - Alphanumeric
            - Example: Op9Vmp
            - Max: 100	   
    */

  public async payFortTokenizationRequest(createTokenizationRequestDto: {
    merchant_reference: string;
    language: PayfortLanguageEnum;
    expiry_date: number;
    card_number: number;
    card_security_code: number;
    token_name?: string;
    card_holder_name?: string;
    remember_me?: PayfortRememberMeEnum;
    return_url?: string;
  }) {
    const {
      merchant_reference,
      language,
      expiry_date,
      card_holder_name,
      card_number,
      card_security_code,
      remember_me,
      token_name
    } = createTokenizationRequestDto;
    const params = {
      service_command: PayfortCommandEnum.TOKENIZATION,
      access_code: process.env.PAYFORT_ACCESS_CODE,
      merchant_identifier: process.env.PAYFORT_MERCHANT_IDENTIFIER,
      merchant_reference,
      language,
      expiry_date,
      card_number,
      card_security_code,
      ...(token_name && { token_name }),
      ...(card_holder_name && { card_holder_name }),
      ...(remember_me && { remember_me })
    };
    const signature = this.payfortService.createSignature(params);
    try {
      const res = await axios({
        method: 'POST',
        url: process.env.PAYFORT_TOKENIZATION_URL,
        headers: {
          'Content-Type': 'application/json'
        },
        params: { ...params, signature }
      });

      const resData = String(res?.data);
      if (resData.includes('returnUrlParams = {')) {
        const start = resData.indexOf('returnUrlParams = {') + 18;
        const end = resData.indexOf('};') + 1;
        return JSON.parse(resData.slice(start, end));
      }
      return null;
    } catch (error) {}
  }
}
