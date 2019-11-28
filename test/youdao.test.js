const fs = require('fs')
const test = require('ava')
const path = require('path')
const getUrl = require('../lib/youdao/config')
const Parser = require('../lib/youdao/parser')

test('youdao api for getUrl', t => {
  t.deepEqual(getUrl('曼巴'), 'https://dict.youdao.com/w/eng/')
  t.deepEqual(getUrl('mamba'), 'https://dict.youdao.com/w/')
})

test('youdao api for parser', t => {
  const body = fs.readFileSync(path.join(__dirname, './html/body.html'))
  console.log(body)
  const res =    '英 [həˈləʊ] 美 [helˈō] \n\nint. 喂；哈罗\nn. 表示问候， 惊奇或唤起注意时的用语\nn. (Hello)人名；(法)埃洛\n\nHello, who\'s speaking, please?\n喂，请问你是谁呀?\nThe American walked to a telephone booth,"Hello. Is that the bank?\n那个美国人走到公用电话间旁打电话:"喂,银行吗?\nShe never passes without stopping to say hello.\n她从这儿经过时没有一次不停下来问候一番。\n'
  t.deepEqual(Parser.parse(false, body), res)
})
