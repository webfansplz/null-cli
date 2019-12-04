const open = require('open');
const sites = require('./sites');

async function search(keyword, options) {
  const keys = Object.keys(options)
  let froms = keys.length > 0 ? keys : ['default'];

  if (keys.includes('all')) {
    froms = Object.keys(sites);
  }

  await Promise.all(froms.map(async from => {
    const searchUri = `${sites[from]}${keyword}`;
    await open(searchUri);
  }))
}

module.exports = search;
