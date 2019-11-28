const CryptoJS = require('crypto-js');
const chalk = require('chalk');

const methods = {
  base64: base64 => CryptoJS.enc.Base64.parse(base64).toString(CryptoJS.enc.Utf8),
  hex: hex => CryptoJS.enc.Hex.parse(hex).toString(CryptoJS.enc.Utf8),
  aes: (str, aeskey, aesiv) => {
    const key = CryptoJS.enc.Utf8.parse(aeskey);
    const iv = CryptoJS.enc.Utf8.parse(aesiv);
    const srcs = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(str));
    const decrypt = CryptoJS.AES.decrypt(srcs, key, {
      iv,
    }).toString(CryptoJS.enc.Utf8);
    return decrypt.toString();
  },
};
function dec(name, { method, key, iv }) {
  if (!methods[method]) {
    console.log(`Unknown option method ${chalk.yellow(method)}.`);
    return;
  }
  console.log(methods[method](name, key, iv));
  return methods[method](name, key, iv);
}
module.exports = dec;
