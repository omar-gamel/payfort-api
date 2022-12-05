import { Injectable } from '@nestjs/common';

import * as crypto from 'crypto';

@Injectable()
export class PayfortService {
  /*
     Signature Pattern :
        1- Sort all Amazon Payment Services request parameters (both mandatory and optional) in an ascending alphabetical order based on the parameters names.
        2- Concatenate the parameter name with the value separated by ’=’ (param_name=param_value).
        3- Concatenate all the parameters directly without any separator. (param_name1=param_value1param_name2=param_value2).
        4- Add the Merchant’s Passphrase at the beginning and end of the parameters string. (REQUESTPHRASEparam_name1=param_value1param_name2=param_value2RE QUESTPHRASE).
        5- Use the SHA or HMAC SHA function to generate the SHA or HMAC SHA value of the resulted string depending on the type of SHA or HMAC SHA selected by the Merchant.

  */
  public createSignature(requestParam: any): string {
    const keys = [];
    let signatureText = '';
    for (const key in requestParam) {
      keys.push(key);
    }
    keys.sort();
    for (const key of keys) {
      signatureText = `${signatureText}${key}=${requestParam[key]}`;
    }
    const requestPhrase = process.env.PAYFORT_SIGNATURE_PHASE;
    const finalSignature = `${requestPhrase}${signatureText}${requestPhrase}`;
    const hashedSignature = crypto.createHash('sha256').update(finalSignature).digest('hex');
    return hashedSignature;
  }

  public _status(res_status: string): string {
    switch (res_status) {
      case '14':
        // ACCEPTED
        return 'SUCCESSED';
      case '20':
        // On_HOLD
        return 'PENDING';
      case '19':
        // PENDING
        return 'PENDING';
      case '40':
        // IN_REVIEW
        return 'PENDING';
      case '15':
        // UNCERTAION - عدم اليقين
        return 'FAILED';
      case '13':
        // DROPPED
        return 'FAILED';
      case '10':
        // IN_COMPLETE
        return 'FAILED';
      case '00':
        return 'FAILED';
    }
  }
}
