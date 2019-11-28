const request = require('request')
const chalk = require('chalk')
const noCase = require('no-case')
const urlencode = require('urlencode')
const isChinese = require('is-chinese')
const Parser = require('./parser')
const { logWithSpinner, stopSpinner } = require('../../utils/spinner')
const getUrl = require('./config')

function youdao(word) {
  const keyword = isChinese(word) ? word : noCase(word)
  logWithSpinner('正在翻译中...')
  request(
    {
      url: getUrl(keyword) + urlencode(keyword),
    },
    (error, _, body) => {
      if (error) {
        stopSpinner('翻译出错')
        console.log(`Translate word : ${chalk.red(error)}.`)
        return false
      }
      stopSpinner('翻译完成')
      console.log(Parser.parse(isChinese(word), body))
    },
  )
}

module.exports = youdao
