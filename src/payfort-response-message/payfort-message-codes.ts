export const PayfortMessageCodes = {
  '000': { EN: 'Success.', AR: 'Success.' },
  '001': { EN: 'Missing parameter.', AR: 'Missing parameter.' },
  '002': { EN: 'Invalid parameter format.', AR: 'Invalid parameter format.' },
  '003': {
    EN: 'Payment option is not available for this merchant’s account.',
    AR: 'Payment option is not available for this merchant’s account.'
  },
  '004': { EN: 'Invalid command.', AR: 'Invalid command.' },
  '005': { EN: 'Invalid amount.', AR: 'Invalid amount.' },
  '006': { EN: 'Technical problem.', AR: 'Technical problem.' },
  '007': { EN: 'Duplicate order number.', AR: 'Duplicate order number.' },
  '008': { EN: 'Signature mismatch.', AR: 'Signature mismatch.' },
  '009': { EN: 'Invalid merchant identifier.', AR: 'Invalid merchant identifier.' },
  '010': { EN: 'Invalid access code.', AR: 'Invalid access code.' },
  '011': { EN: 'Order not saved.', AR: 'Order not saved.' },
  '012': { EN: 'Card expired.', AR: 'Card expired.' },
  '013': { EN: 'Invalid currency.', AR: 'Invalid currency.' },
  '014': { EN: 'Inactive payment option.', AR: 'Inactive payment option.' },
  '015': { EN: 'Inactive merchant account.', AR: 'Inactive merchant account.' },
  '016': { EN: 'Invalid card number.', AR: 'Invalid card number.' },
  '017': {
    EN: 'Operation not allowed by the acquirer.',
    AR: 'Operation not allowed by the acquirer.'
  },
  '018': { EN: 'Operation not allowed by processor.', AR: 'Operation not allowed by processor.' },
  '019': { EN: 'Inactive acquirer.', AR: 'Inactive acquirer.' },
  '020': { EN: 'Processor is inactive.', AR: 'Processor is inactive.' },
  '021': {
    EN: 'Payment option deactivated by acquirer.',
    AR: 'Payment option deactivated by acquirer.'
  },
  '023': { EN: 'Currency not accepted by acquirer.', AR: 'Currency not accepted by acquirer.' },
  '024': { EN: 'Currency not accepted by processor.', AR: 'Currency not accepted by processor.' },
  '025': {
    EN: 'Processor integration settings are missing.',
    AR: 'Processor integration settings are missing.'
  },
  '026': {
    EN: 'Acquirer integration settings are missing.',
    AR: 'Acquirer integration settings are missing.'
  },
  '027': { EN: 'Invalid extra parameters.', AR: 'Invalid extra parameters.' },
  '029': { EN: 'Insufficient funds.', AR: 'Insufficient funds.' },
  '030': { EN: 'Authentication failed.', AR: 'Authentication failed.' },
  '031': { EN: 'Invalid issuer.', AR: 'Invalid issuer.' },
  '032': { EN: 'Invalid parameter length.', AR: 'Invalid parameter length.' },
  '033': { EN: 'Parameter value not allowed.', AR: 'Parameter value not allowed.' },
  '034': { EN: 'Operation not allowed.', AR: 'Operation not allowed.' },
  '035': { EN: 'Order created successfully.', AR: 'Order created successfully.' },
  '036': { EN: 'Order not found.', AR: 'Order not found.' },
  '037': { EN: 'Missing return URL.', AR: 'Missing return URL.' },
  '038': { EN: 'Token service inactive.', AR: 'Token service inactive.' },
  '039': { EN: 'No active payment option found.', AR: 'No active payment option found.' },
  '040': { EN: 'Invalid transaction source.', AR: 'Invalid transaction source.' },
  '042': {
    EN: 'Operation amount exceeds the authorized amount.',
    AR: 'Operation amount exceeds the authorized amount.'
  },
  '043': { EN: 'Inactive Operation.', AR: 'Inactive Operation.' },
  '044': { EN: 'Token name does not exist.', AR: 'Token name does not exist.' },
  '046': {
    EN: 'Channel is not configured for the selected payment option.',
    AR: 'Channel is not configured for the selected payment option.'
  },
  '047': { EN: 'Order already processed.', AR: 'Order already processed.' },
  '048': {
    EN: 'Operation amount exceeds captured amount.',
    AR: 'Operation amount exceeds captured amount.'
  },
  '049': {
    EN: 'Operation not valid for this payment option.',
    AR: 'Operation not valid for this payment option.'
  },
  '050': {
    EN: 'Merchant per transaction limit exceeded.',
    AR: 'Merchant per transaction limit exceeded.'
  },
  '051': { EN: 'Technical error.', AR: 'Technical error.' },
  '052': { EN: 'Consumer is not in OLP database.', AR: 'Consumer is not in OLP database.' },
  '053': {
    EN: 'Merchant is not found in OLP Engine DB.',
    AR: 'Merchant is not found in OLP Engine DB.'
  },
  '054': {
    EN: 'Transaction cannot be processed at this moment.',
    AR: 'Transaction cannot be processed at this moment.'
  },
  '055': {
    EN: 'OLP ID Alias is not valid., Please contact your bank.',
    AR: 'OLP ID Alias is not valid., Please contact your bank.'
  },
  '056': {
    EN: 'OLP ID Alias does not exist., Please enter a valid OLP ID Alias.',
    AR: 'OLP ID Alias does not exist., Please enter a valid OLP ID Alias.'
  },
  '057': {
    EN: 'Transaction amount exceeds the daily transaction limit.',
    AR: 'Transaction amount exceeds the daily transaction limit.'
  },
  '058': {
    EN: 'Transaction amount exceeds the per transaction limit.',
    AR: 'Transaction amount exceeds the per transaction limit.'
  },
  '059': {
    EN: 'Merchant Name and SADAD Merchant ID do not match.',
    AR: 'Merchant Name and SADAD Merchant ID do not match.'
  },
  '060': {
    EN: 'The entered OLP password is incorrect., Please provide a valid password.',
    AR: 'The entered OLP password is incorrect., Please provide a valid password.'
  },
  '062': { EN: 'Token has been created.', AR: 'Token has been created.' },
  '063': { EN: 'Token has been updated.', AR: 'Token has been updated.' },
  '064': { EN: '3D Secure check requested.', AR: '3D Secure check requested.' },
  '065': {
    EN: 'Transaction waiting for customer’s action.',
    AR: 'Transaction waiting for customer’s action.'
  },
  '066': { EN: 'Merchant reference already exists.', AR: 'Merchant reference already exists.' },
  '067': {
    EN: 'Dynamic Descriptor not configured for selected payment option.',
    AR: 'Dynamic Descriptor not configured for selected payment option.'
  },
  '068': { EN: 'SDK service is inactive.', AR: 'SDK service is inactive.' },
  '069': {
    EN: 'Mapping not found for the given error code.',
    AR: 'Mapping not found for the given error code.'
  },
  '070': { EN: 'device_id mismatch.', AR: 'device_id mismatch.' },
  '071': { EN: 'Failed to initiate connection.', AR: 'Failed to initiate connection.' },
  '072': {
    EN: 'Transaction has been cancelled by the consumer.',
    AR: 'Transaction has been cancelled by the consumer.'
  },
  '073': { EN: 'Invalid request format.', AR: 'Invalid request format.' },
  '074': { EN: 'Transaction failed.', AR: 'Transaction failed.' },
  '075': { EN: 'Transaction failed.', AR: 'Transaction failed.' },
  '076': { EN: 'Transaction not found in OLP.', AR: 'Transaction not found in OLP.' },
  '077': { EN: 'Error transaction code not found.', AR: 'Error transaction code not found.' },
  '078': { EN: 'Failed to check fraud screen.', AR: 'Failed to check fraud screen.' },
  '079': {
    EN: 'Transaction challenged by fraud rules.',
    AR: 'Transaction challenged by fraud rules.'
  },
  '080': { EN: 'Invalid payment option.', AR: 'Invalid payment option.' },
  '082': { EN: 'Inactive fraud service.', AR: 'Inactive fraud service.' },
  '083': { EN: 'Unexpected user behavior.', AR: 'Unexpected user behavior.' },
  '084': {
    EN: 'Transaction amount is either bigger than maximum or less than minimum amount accepted for the selected plan.',
    AR: 'Transaction amount is either bigger than maximum or less than minimum amount accepted for the selected plan.'
  },
  '086': {
    EN: 'Installment plan is not configured for Merchant account.',
    AR: 'Installment plan is not configured for Merchant account.'
  },
  '087': {
    EN: 'Card BIN does not match accepted issuer bank.',
    AR: 'Card BIN does not match accepted issuer bank.'
  },
  '088': {
    EN: 'Token name was not created for this transaction.',
    AR: 'Token name was not created for this transaction.'
  },
  '089': {
    EN: 'Failed to retrieve digital wallet details.',
    AR: 'Failed to retrieve digital wallet details.'
  },
  '090': { EN: 'Transaction in review.', AR: 'Transaction in review.' },
  '092': { EN: 'Invalid issuer code.', AR: 'Invalid issuer code.' },
  '093': { EN: 'service inactive.', AR: 'service inactive.' },
  '094': { EN: 'Invalid Plan Code.', AR: 'Invalid Plan Code.' },
  '095': { EN: 'Inactive Issuer.', AR: 'Inactive Issuer.' },
  '096': { EN: 'Inactive Plan.', AR: 'Inactive Plan.' },
  '097': { EN: 'Operation not allowed for service.', AR: 'Operation not allowed for service.' },
  '098': { EN: 'Invalid or expired call_id.', AR: 'Invalid or expired call_id.' },
  '099': { EN: 'Failed to execute service.', AR: 'Failed to execute service.' },
  '100': { EN: 'Invalid expiry date.', AR: 'Invalid expiry date.' },
  '101': { EN: 'Bill number not found.', AR: 'Bill number not found.' },
  '102': { EN: 'Apple Pay order has been expired.', AR: 'Apple Pay order has been expired.' },
  '103': { EN: 'Duplicate subscription ID.', AR: 'Duplicate subscription ID.' },
  '104': { EN: 'No plans valid for request.', AR: 'No plans valid for request.' },
  '105': { EN: 'Invalid bank code.', AR: 'Invalid bank code.' },
  '106': { EN: 'Inactive bank.', AR: 'Inactive bank.' },
  '107': { EN: 'Invalid transfer_date.', AR: 'Invalid transfer_date.' },
  '110': {
    EN: 'Contradicting parameters, please refer to the integration guide.',
    AR: 'Contradicting parameters, please refer to the integration guide.'
  },
  '111': {
    EN: 'Service not applicable for payment option.',
    AR: 'Service not applicable for payment option.'
  },
  '112': {
    EN: 'Service not applicable for payment operation.',
    AR: 'Service not applicable for payment operation.'
  },
  '113': {
    EN: 'Service not applicable for e-commerce indicator.',
    AR: 'Service not applicable for e-commerce indicator.'
  },
  '114': { EN: 'Token already exist.', AR: 'Token already exist.' },
  '115': { EN: 'Expired invoice payment link.', AR: 'Expired invoice payment link.' },
  '116': { EN: 'Inactive notification type.', AR: 'Inactive notification type.' },
  '117': {
    EN: 'Invoice payment link already processed.',
    AR: 'Invoice payment link already processed.'
  },
  '118': { EN: 'Order bounced.', AR: 'Order bounced.' },
  '119': { EN: 'Request dropped.', AR: 'Request dropped.' },
  '120': {
    EN: 'Payment link terms and conditions not found.',
    AR: 'Payment link terms and conditions not found.'
  },
  '121': { EN: 'Card number is not verified.', AR: 'Card number is not verified.' },
  '122': { EN: 'Invalid date interval.', AR: 'Invalid date interval.' },
  '123': {
    EN: 'You have exceeded the maximum number of attempts.',
    AR: 'You have exceeded the maximum number of attempts.'
  },
  '124': { EN: 'Account successfully created.', AR: 'Account successfully created.' },
  '125': { EN: 'Invoice already paid.', AR: 'Invoice already paid.' },
  '126': { EN: 'Duplicate invoice ID.', AR: 'Duplicate invoice ID.' },
  '127': {
    EN: 'Merchant reference is not generated yet.',
    AR: 'Merchant reference is not generated yet.'
  },
  '128': {
    EN: 'The generated report is still pending, you can’t download it now.',
    AR: 'The generated report is still pending, you can’t download it now.'
  },
  '129': {
    EN: '“Downloaded report” queue is full., Wait till its empty again.',
    AR: '“Downloaded report” queue is full., Wait till its empty again.'
  },
  '134': {
    EN: 'Your search results have exceeded the maximum number of records.',
    AR: 'Your search results have exceeded the maximum number of records.'
  },
  '136': { EN: 'The Batch file validation is failed.', AR: 'The Batch file validation is failed.' },
  '137': { EN: 'Invalid Batch file execution date.', AR: 'Invalid Batch file execution date.' },
  '138': {
    EN: 'The Batch file still under validation.',
    AR: 'The Batch file still under validation.'
  },
  '140': {
    EN: 'The Batch file still under processing.',
    AR: 'The Batch file still under processing.'
  },
  '141': { EN: 'The Batch reference does not exist.', AR: 'The Batch reference does not exist.' },
  '142': { EN: 'The Batch file header is invalid.', AR: 'The Batch file header is invalid.' },
  '144': { EN: 'Invalid Batch file.', AR: 'Invalid Batch file.' },
  '146': {
    EN: 'The Batch reference is already exist.',
    AR: 'The Batch reference is already exist.'
  },
  '147': {
    EN: 'The Batch process request has been received.',
    AR: 'The Batch process request has been received.'
  },
  '148': { EN: 'Batch file will be processed.', AR: 'Batch file will be processed.' },
  '149': { EN: 'Payment link request id not found.', AR: 'Payment link request id not found.' },
  '150': { EN: 'Payment link is already open.', AR: 'Payment link is already open.' },
  '151': { EN: '3ds_id does not exist.', AR: '3ds_id does not exist.' },
  '152': {
    EN: '3Ds verification doesn’t match the request details.',
    AR: '3Ds verification doesn’t match the request details.'
  },
  '154': {
    EN: 'You have reached the maximum number of upload retries.',
    AR: 'You have reached the maximum number of upload retries.'
  },
  '155': {
    EN: 'The upload retries is not configured.',
    AR: 'The upload retries is not configured.'
  },
  '662': {
    EN: 'Operation not allowed. The specified order is not confirmed yet.',
    AR: 'Operation not allowed. The specified order is not confirmed yet.'
  },
  '666': { EN: 'Transaction declined.', AR: 'Transaction declined.' },
  '773': { EN: 'Transaction closed.', AR: 'Transaction closed.' },
  '777': {
    EN: 'The transaction has been processed, but failed to receive confirmation.',
    AR: 'The transaction has been processed, but failed to receive confirmation.'
  },
  '778': { EN: 'Session timed-out.', AR: 'Session timed-out.' },
  '779': { EN: 'Transformation error.', AR: 'Transformation error.' },
  '780': {
    EN: 'Transaction number transformation error.',
    AR: 'Transaction number transformation error.'
  },
  '781': {
    EN: 'Message or response code transformation error.',
    AR: 'Message or response code transformation error.'
  },
  '783': { EN: 'Installments service inactive.', AR: 'Installments service inactive.' },
  '784': {
    EN: 'Transaction still processing you can’t make another transaction.',
    AR: 'Transaction still processing you can’t make another transaction.'
  },
  '785': { EN: 'Transaction blocked by fraud check.', AR: 'Transaction blocked by fraud check.' },
  '787': { EN: 'Failed to authenticate the user.', AR: 'Failed to authenticate the user.' },
  '788': { EN: 'Invalid bill number.', AR: 'Invalid bill number.' },
  '789': { EN: 'Expired bill number.', AR: 'Expired bill number.' },
  '790': { EN: 'Invalid bill type code.', AR: 'Invalid bill type code.' }
};
