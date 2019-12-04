const open = require('open');
const sites = require('./sites');

async function search(keyword, options) {
  const from = Object.keys(options)[0] || 'google';
  const searchUri = `${sites[from]}${keyword}`;
  await open(searchUri);
}

module.exports = search;
