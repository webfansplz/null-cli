const chalk = require('chalk');
const crypto = require('crypto');

async function random(len) {
  if (!/^[+]{0,1}(\d+)$/.test(len)) {
    console.log(`Not a valid length ${chalk.yellow(len)}.`);
    return;
  }
  const buf = crypto.randomBytes(Number(len));
  const res = buf.toString('hex');
  const start = Math.floor(Math.random() * (res.length / 2));
  console.log(res.slice(start, start + Number(len)));
  return res.slice(start, start + Number(len));
}
module.exports = random;
