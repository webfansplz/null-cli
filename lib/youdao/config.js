const isChinese = require('is-chinese');

function getUrl(word) {
  return isChinese(word)
    ? 'https://dict.youdao.com/w/eng/'
    : 'https://dict.youdao.com/w/';
}

module.exports = getUrl;
