import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PayfortService } from './payfort.service';

@Injectable()
export class PayfortPurchaseService {
  constructor(private readonly payfortService: PayfortService) {}
  /*
    REQUEST PARAMS :
        1- command 
            - expected values: AUTHORIZATION, PURCHASE
            - Alpha
            - Mandatory
            - max: 20	 
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
        5- amount
            - The transaction’s amount
            - Each currency has predefined allowed decimal points that should be taken into consideration when sending the amount
            - Alpha
            - Example: 10000
            - Mandatory
            - Max: 10    
        6- currency
            - The currency of the transaction’s amount in ISO code 3
            - Alpha
            - Example: AED
            - Mandatory
            - Max: 3 
        7- language
            - The checkout page and messages language
            - Alpha
            - Expected values: en/ ar
            - Mandatory
            - Max: 2
        8- customer_email
            - The customer’s email.
            - Alphanumeric
            - Example: customer@domain.com
            - Mandatory
            - Max: 254   
        9- customer_ip
            - It holds the customer’s IP address. 
            - It’s Mandatory, if the fraud service is active.
            - Alphanumeric
            - Example:
                - IPv4 → 192.178.1.10
                - IPv6 → 2001:0db8:3042:0002:5a55:caff:fef6:bdbf
            - Mandatory
            - Max: 45
        10-  token_name
            - The Token received from the Tokenization process
            - Alphanumeric
            - Example: Op9Vmp - 1551899mwGbPzTwdbP3JAX9eCmENqu
            - Mandatory
            - Max: 100
        11- signature
            - A string hashed using the Secure Hash Algorithm
            - Alphanumeric
            - Example: 7cad05f0212ed933c9a5d5dffa31661acf2c827a
            - Don't include parameters if using Merchant Page 2.0 tokenization request: card_security_code, card number, expiry_date, card_holder_name, remember_me
            - Mandatory
            - Max: 200  
        12- payment_option?
            - Payment option
            - Alpha
            - Expected values:
                - MASTERCARD
                - VISA
                - AMEX
                - MADA (for Purchase operations and eci Ecommerce only) Click here to download MADA Branding Document
                - MEEZA (for Purchase operations and ECOMMERCE eci only)
            - Optional
            - Max: 10    
        13- eci?
            - Ecommerce indicator
            - Alpha
            - Expected values:
                - ECOMMERCE
                - MOTO
                - RECCURING
            - Optional
            - Max: 16
        14- order_description?
            - It holds the description of the order
            - Alphanumeric
            - Example: iPhone 6-S
            - Optional
            - Max: 150   
        15- card_security_code?
            - A security code for the card
            - Only AMEX accepts card security code of 4 digits.
            - Numeric
            - Example: 123
            - Optional
            - Max: 4     
        16- customer_name?
            - The customer’s name
            - Alpha
            - Example: John Smith
            - Optional
            - Max: 40  
        17- merchant_extra?
            - Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report
            - Alphanumeric
            - Example: John Smith
            - Optional
            - Max: 999  
        18- remember_me?
            - This parameter provides you with an indication to whether to save this token for the user based on the user selection
            - Alpha
            - Expected values: -YES -NO
            - Optional
            - Max: 3  
        19- phone_number?
            - The customer’s phone number
            - Alphanumeric
            - Example: 00962797219966
            - Optional
            - Max: 19  
        20- settlement_reference?
            - The Merchant submits unique value to Amazon Payment Services. 
            - The value is then passed to the Acquiring bank and displayed to the merchant in the Acquirer settlement file
            - Alphanumeric
            - Example: XYZ9239-yu898
            - Optional
            - Max: 34  
        21- return_url?
            - The URL of the Merchant’s page to be displayed to the customer when the order is processed
            - Alphanumeric
            - Example: https://www.merchant.com
            - Optional
            - Max: 400 

        22- billing_stateProvince?
            - The state or province of the address.
            - Alphanumeric
            - Example: AMMAN - TALFILAH
            - Optional
            - Max: 20
        23- billing_provinceCode?
            - The three character ISO 3166-2 country subdivision code for the state or province of the address
            - Providing this field might improve your payer experience for 3-D Secure payer authentication
            - Alphanumeric
            - Example: AM - AT
            - Optional
            - Max: 3 
        24- billing_street?
            - The first line of the address. For example, this may be the street name and number, or the Post Office Box details
            - Alphanumeric
            - Optional
            - Max: 100
        25- billing_postcode?
            - The post code or zip code of the address
            - Alphanumeric
            - Optional
            - Max: 10     

        26- billing_country?
            - The 3 letter ISO standard Alphanumeric country code of the address
            - Alphanumeric
            - Optional
            - Min:3, Max: 3                   
        27- billing_company?
            - The name of the company associated with this address
            - Alphanumeric
            - Optional
            - Max: 100  

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
        4- fort_id
            - The order’s unique reference returned by our system
            - Numeric
            - Example: 149295435400084008
            - Max: 20        
    */

  public async createPayFortPurchaseRequest(createPurchaseRequestDto: {
    merchant_reference: string;
    amount: number;
    currency: string;
    language: PayfortLanguageEnum;
    customer_email: string;
    customer_ip: string;
    token_name: string;
    payment_option?: PayfortPaymentOptionEnum;
    eci?: PayfortEcommerceIndicatorEnum;
    order_description?: string;
    card_security_code?: number;
    customer_name?: string;
    remember_me?: PayfortRememberMeEnum;
    phone_number?: string;
    return_url?: string;
  }) {
    const {
      merchant_reference,
      amount,
      currency,
      language,
      customer_email,
      customer_ip,
      token_name,
      payment_option,
      eci,
      order_description,
      card_security_code,
      customer_name,
      phone_number,
      return_url,
      remember_me
    } = createPurchaseRequestDto;
    const params = {
      command: PayfortCommandEnum.PURCHASE,
      access_code: process.env.PAYFORT_ACCESS_CODE,
      merchant_identifier: process.env.PAYFORT_MERCHANT_IDENTIFIER,
      merchant_reference,
      amount,
      currency,
      language,
      customer_email,
      customer_ip,
      token_name,
      ...(eci && { eci }),
      ...(order_description && { order_description }),
      ...(payment_option && { payment_option }),
      ...(customer_name && { customer_name }),
      ...(phone_number && { phone_number }),
      ...(return_url && { return_url }),
      ...(remember_me && { remember_me }),
      ...(card_security_code && { card_security_code })
    };
    const signature = this.payfortService.createSignature(params);
    try {
      return await axios({
        method: 'POST',
        url: process.env.PAYFORT_PURCHASE_URL,
        headers: {
          'Content-Type': 'application/json'
        },
        data: { ...params, signature }
      });
    } catch (error) {}
  }
}
