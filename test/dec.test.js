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
    dec('cea47c666b605fdb0fd23223476d4ed7', {
      method: 'aes',
      key: '20201111nullbest',
      iv: 'webbestlangworld',
    }),
    'hello-world',
  )
})
