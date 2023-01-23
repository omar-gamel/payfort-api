# Custom merchant page integration
When you use our custom merchant page integration route you build your own payment form that captures payment data and that directly submits that data to Amazon Payment Services for payment authorization.

Custom merchant page integration is a good choice if you want the highest level of on-page customization, or if your ecommerce use case has unique technical requirements.

<h2>1- Create signature</h2>
<div>
  <h5>Signature Pattern :</h5>
  <ol>
     <li>Sort all Amazon Payment Services request parameters (both mandatory and optional) in an ascending alphabetical order based on the parameters names.</li>
     <li>Concatenate the parameter name with the value separated by ’=’ (param_name=param_value).</li>
     <li>Concatenate all the parameters directly without any separator. (param_name1=param_value1param_name2=param_value2).</li>
     <li>
       Add the Merchant’s Passphrase at the beginning and end of the parameters string. (REQUESTPHRASEparam_name1=param_value1param_name2=param_value2RE QUESTPHRASE).
     </li>
     <li>
       Use the SHA or HMAC SHA function to generate the SHA or HMAC SHA value of the resulted string depending on the type of SHA or HMAC SHA selected by the Merchant.      </li>
  </ol>
</div>   

<h2>2- Create Tokenization Request</h2>
<div>
  Test Environment URL:<br>
  https://sbcheckout.PayFort.com/FortAPI/paymentPage<br><br>
  Production Environment URL:<br>
  https://checkout.PayFort.com/FortAPI/paymentPage
</div>  
<div>
  <h6>Include the following parameters in the Request you will send to Amazon Payment Services:</h6>
  <table>
    <tr>
      <th>ATTRIBUTES</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>LENGTH</th>
      <th>DESCRIPTION</th>
    </tr>
    <tr>
      <td>service_command</td>
      <td>Alpha</td>
      <td>Mandatory</td>
      <td>20</td>
      <td>Expected values: TOKENIZATION</td>
    </tr>
    <tr>
      <td>access_code</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>20</td>
      <td>Example: zx0IPmPy5jp1vAz</td>
    </tr> 
    <tr>
      <td>merchant_identifier</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>20</td>
      <td>The ID of the Merchant.</td>
    </tr>
    <tr>
      <td>merchant_reference</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>20</td>
      <td>The Merchant’s unique order number.</td>
    </tr> 
    <tr>
      <td>language</td>
      <td>Alpha</td>
      <td>Mandatory</td>
      <td>2</td>
      <td>
        - Expected values:  en - ar 
      </td>
    </tr>
    <tr>
      <td>expiry_date</td>
      <td>Numeric</td>
      <td>Mandatory</td>
      <td>4</td>
      <td>The card’s expiry date</td>
    </tr>
    <tr>
      <td>card_number</td>
      <td>Numeric</td>
      <td>Mandatory</td>
      <td>19</td>
      <td>
        - The clear credit card’s number.<br>
        - Example: 4005550000000001
      </td>
    </tr>
    <tr>
      <td>card_security_code</td>
      <td>Numeric</td>
      <td>Mandatory</td>
      <td>4</td>
      <td>
         - A security code for the card.<br> 
         - Example: 123
      </td>
    </tr>
    <tr>
      <td>signature</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>200</td>
      <td>
         - Example: 7cad05f0212ed933c9a5d5dffa31661acf2c827a
      </td>
    </tr>
    <tr>
      <td>token_name</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>100</td>
      <td>
         - The Token received from the Tokenization process.<br>
         - Example: Op9Vmp
      </td>
    </tr>
    <tr>
      <td>card_holder_name</td>
      <td>Alpha</td>
      <td>Optional</td>
      <td>50</td>
      <td>
         - The card holder name.<br>
         - Example: John Smith
      </td>
    </tr>
    <tr>
      <td>remember_me</td>
      <td>Alpha</td>
      <td>Optional</td>
      <td>3</td>
      <td>
         - Expected values: YES - NO
      </td>
    </tr>
     <tr>
      <td>return_url</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>400</td>
      <td>
         - Page to be displayed to the customer.<br>
         - Example: https://www.merchant.com
      </td>
    </tr>
  </table>
</div>
<div>
  <h6>The following parameters will be returned in Amazon Payment Services response:</h6>
  <table>
    <tr>
      <th>ATTRIBUTES</th>
      <th>TYPE</th>
      <th>LENGTH</th>
      <th>DESCRIPTION</th>
    </tr>
    <tr>
      <td>response_message</td>
      <td>Alphanumeric</td>
      <td>150</td>
      <td>
        - Message description of the response code.<br> 
        - It returns according to the request language.<br>
        - Expected values: (Please refer to section messages)
      </td>
    </tr>
    <tr>
      <td>response_code</td>
      <td>Numeric</td>
      <td>5</td>
      <td>
        - Response Code carries the value of our system’s response.<br> 
        - The code consists of five digits,<br> 
        - The first 2 digits represent the response status.<br>
        - Example: 20064
      </td>
    </tr>
    <tr>
      <td>status</td>
      <td>Numeric</td>
      <td>2</td>
      <td>
        - A two-digit numeric value that indicates the status of the transaction.<br> 
        - Expected values: (Please refer to section statuses) 
      </td>
    </tr>
    <tr>
      <td>card_bin</td>
      <td>Numeric</td>
      <td>8</td>
      <td>
        - The first 6 digits of the card number.<br> 
        - Example: 478773
      </td>
    </tr>
    <tr>
      <td>token_name</td>
      <td>Alphanumeric</td>
      <td>100</td>
      <td>
        - Example: Op9Vmp
      </td>
    </tr>
  </table>
</div>

<h2>3- Create FortPurchase Request</h2>
<div>
  Test Environment URL:<br>
  https://sbpaymentservices.payfort.com/FortAPI/paymentApi<br><br>
  Production Environment URL:<br>
  https://paymentservices.payfort.com/FortAPI/paymentApi
</div> 
<div>
  <h6>Include the following parameters in the request you will send to Amazon Payment Services:</h6>
  <table>
    <tr>
      <th>ATTRIBUTES</th>
      <th>TYPE</th>
      <th>REQUIRED</th>
      <th>LENGTH</th>
      <th>DESCRIPTION</th>
    </tr>
    <tr>
      <td>command</td>
      <td>Alpha</td>
      <td>Mandatory</td>
      <td>20</td>
      <td>Expected values: AUTHORIZATION - PURCHASE</td>
    </tr>
    <tr>
      <td>access_code</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>20</td>
      <td>Example: zx0IPmPy5jp1vAz</td>
    </tr> 
    <tr>
      <td>merchant_identifier</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>20</td>
      <td>The ID of the Merchant.</td>
    </tr>
    <tr>
      <td>merchant_reference</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>20</td>
      <td>The Merchant’s unique order number.</td>
    </tr>
    <tr>
      <td>amount</td>
      <td>Alpha</td>
      <td>Mandatory</td>
      <td>10</td>
      <td>
         - Each currency has predefined allowed decimal points.<br>
         - Example: 10000
      </td>
    </tr>
    <tr>
      <td>currency</td>
      <td>Alpha</td>
      <td>Mandatory</td>
      <td>3</td>
      <td>
         - The currency of the transaction’s amount in ISO code 3.<br>
         - Example: AED
      </td>
    </tr>
    <tr>
      <td>language</td>
      <td>Alpha</td>
      <td>Mandatory</td>
      <td>2</td>
      <td>The checkout page and messages language.</td>
    </tr>
    <tr>
      <td>customer_email</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>254</td>
      <td>
        - The customer’s email.<br>
        - Example: customer@domain.com
      </td>
    </tr>
    <tr>
      <td>customer_ip</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>45</td>
      <td>
        - It holds the customer’s IP address.<br> 
            - It’s Mandatory, if the fraud service is active.<br> 
            - Example:<br> 
                - IPv4 → 192.178.1.10<br> 
                - IPv6 → 2001:0db8:3042:0002:5a55:caff:fef6:bdbf
      </td>
    </tr> 
    <tr>
      <td>signature</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>200</td>
      <td>
         - A string hashed using the Secure Hash Algorithm.<br>
         - Example: 123
      </td>
    </tr>
    <tr>
      <td>token_name</td>
      <td>Alphanumeric</td>
      <td>Mandatory</td>
      <td>100</td>
      <td>
         - The Token received from the Tokenization process.<br>
         - Example: Op9Vmp
      </td>
    </tr>
    <tr>
      <td>payment_option</td>
      <td>Alpha</td>
      <td>Mandatory</td>
      <td>10</td>
      <td>
        - Expected values :<br>
        - MASTERCARD<br>
        - VISA<br>
        - AMEX<br>
        - MADA<br>
        - MEEZA
      </td>
    </tr>
    <tr>
      <td>eci</td>
      <td>Alpha</td>
      <td>Optional</td>
      <td>16</td>
      <td>
         - Ecommerce indicator.<br>
         - Expected values :<br>
         - ECOMMERCE<br>
         - MOTO<br>
         - RECCURING
      </td>
    </tr>
    <tr>
      <td>order_description</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>150</td>
      <td>
         - It holds the description of the order.<br>
         - Example: iPhone 6-S
      </td>
    </tr>
    <tr>
      <td>order_description</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>150</td>
      <td>
         - It holds the description of the order.<br>
         - Example: iPhone 6-S
      </td>
    </tr>
    <tr>
      <td>card_security_code</td>
      <td>Numeric</td>
      <td>Optional</td>
      <td>4</td>
      <td>
         - A security code for the card.<br>
         - Only AMEX accepts card security code of 4 digits.<br>
         - Example: 123
      </td>
    </tr>
    <tr>
      <td>customer_name</td>
      <td>Alpha</td>
      <td>Optional</td>
      <td>40</td>
      <td>
         - The customer’s name.<br>
         - Example: John Smith
      </td>
    </tr>
    <tr>
      <td>remember_me</td>
      <td>Alpha</td>
      <td>Optional</td>
      <td>3</td>
      <td>
         - Expected values:  YES - NO
      </td>
    </tr>
    <tr>
      <td>phone_number</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>19</td>
      <td>
         - The customer’s phone number.<br>
         - Example: 00962797219966
      </td>
    </tr>
    <tr>
      <td>settlement_reference</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>34</td>
      <td>
         - The Merchant submits unique value to Amazon Payment Services.<br>
         - Example: XYZ9239-yu898
      </td>
    </tr>
    <tr>
      <td>billing_stateProvince</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>20</td>
      <td>
         - The state or province of the address.<br>
         - Example: AMMAN - TALFILAH
      </td>
    </tr>
    <tr>
      <td>billing_provinceCode</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>3</td>
      <td>
         - Example: AM - AT
      </td>
    </tr>
    <tr>
      <td>billing_street</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>100</td>
      <td>
         - The first line of the address.
      </td>
    </tr>
    <tr>
      <td>billing_postcode</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>10</td>
      <td>
         - The post code or zip code of the address.
      </td>
    </tr>
    <tr>
      <td>billing_country</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>3</td>
      <td>
         - The 3 letter ISO standard Alphanumeric country code of the address.
      </td>
    </tr>
    <tr>
      <td>billing_company</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>100</td>
      <td>
        - The name of the company associated with this address.
      </td>
    </tr>
    <tr>
      <td>return_url</td>
      <td>Alphanumeric</td>
      <td>Optional</td>
      <td>400</td>
      <td>
         - The URL of the Merchant’s page to be displayed to the customer.<br>
         - Example: https://www.merchant.com
      </td>
    </tr>
  </table>
</div>

<div>
  <h6>The following parameters will be returned in Amazon Payment Services’ response:</h6>
  <table>
    <tr>
      <th>ATTRIBUTES</th>
      <th>TYPE</th>
      <th>LENGTH</th>
      <th>DESCRIPTION</th>
    </tr>
    <tr>
      <td>response_message</td>
      <td>Alphanumeric</td>
      <td>150</td>
      <td>
        - Message description of the response code.<br> 
        - It returns according to the request language.<br>
        - Expected values: (Please refer to section messages)
      </td>
    </tr>
    <tr>
      <td>response_code</td>
      <td>Numeric</td>
      <td>5</td>
      <td>
        - Response Code carries the value of our system’s response.<br> 
        - The code consists of five digits,<br> 
        - The first 2 digits represent the response status.<br>
        - Example: 20064
      </td>
    </tr>
    <tr>
      <td>status</td>
      <td>Numeric</td>
      <td>2</td>
      <td>
        - A two-digit numeric value that indicates the status of the transaction.<br> 
        - Expected values: (Please refer to section statuses) 
      </td>
    </tr>
    <tr>
      <td>fort_id</td>
      <td>Numeric</td>
      <td>8</td>
      <td>
        - The order’s unique reference returned by our system.<br> 
        - Example: 149295435400084008
      </td>
    </tr> 
  </table>
</div>
