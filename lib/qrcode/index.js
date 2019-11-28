const chalk = require('chalk');
const QRCode = require('qrcode');
const { parse } = require('url');

function qrcode(url) {
  const { protocol } = parse(url);
  const website = protocol ? url : `http://${url}`;
  QRCode.toString(website, (err, str) => {
    if (err) {
      console.log(`Generate qrcode error: ${chalk.red(err)}.`);
      return;
    }
    console.log(str);
  });
}
module.exports = qrcode;
