const CryptoJS = require('crypto-js');
const chalk = require('chalk');

const methods = {
  sha1: str => require('crypto-js/sha1')(str).toString(),
  sha224: str => require('crypto-js/sha224')(str).toString(),
  sha256: str => require('crypto-js/sha256')(str).toString(),
  sha384: str => require('crypto-js/sha384')(str).toString(),
  sha512: str => require('crypto-js/sha512')(str).toString(),
  md5: str => require('crypto-js/md5')(str).toString(),
  base64: str => CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str)),
  hex: str => CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(str)),
  aes: (str, aeskey, aesiv) => {
    const key = CryptoJS.enc.Utf8.parse(aeskey);
    const iv = CryptoJS.enc.Utf8.parse(aesiv);
    return CryptoJS.AES.encrypt(str, key, { iv }).ciphertext.toString();
  },
};
function enc(name, { method, key, iv }) {
  if (!methods[method]) {
    console.log(`Unknown option method ${chalk.yellow(method)}.`);
    return;
  }
  console.log(methods[method](name, key, iv));
  return methods[method](name, key, iv);
}
module.exports = enc;
