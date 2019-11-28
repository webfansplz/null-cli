const test = require('ava')
const dec = require('../lib/dec')

test('dec api for base64', t => {
  t.deepEqual(
    dec('aGVsbG8td29ybGQ=', {
      method: 'base64',
    }),
    'hello-world',
  )
})

test('dec api for hex', t => {
  t.deepEqual(
    dec('68656c6c6f2d776f726c64', {
      method: 'hex',
    }),
    'hello-world',
  )
})

test('dec api for aes', t => {
  t.deepEqual(
    dec('b2c17c9dc93065477b5ce37464f1b330', {
      method: 'aes',
      key: 'mambalikeweb2019',
      iv: 'webbestlangworld',
    }),
    'hello-world',
  )
})
