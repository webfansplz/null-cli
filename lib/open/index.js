const browser = require('open');
const { parse } = require('url');

async function open(url) {
  const { protocol } = parse(url);
  const website = protocol ? url : `http://${url}`;
  await browser(website);
}
module.exports = open;
