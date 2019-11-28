const test = require('ava')
const enc = require('../lib/enc')

test('enc api for sha1', t => {
  t.deepEqual(
    enc('mamba-cli', {
      method: 'sha1',
    }),
    '1a2d8803c0c54ea0163920e71acf8cde986dcd34',
  )
})

test('enc api for sha224', t => {
  t.deepEqual(
    enc('mamba-cli', {
      method: 'sha224',
    }),
    '5685b7ce66ca7e7619352874d2b2d6683a93712fbafb053bda5ba1fe',
  )
})

test('enc api for sha256', t => {
  t.deepEqual(
    enc('mamba-cli', {
      method: 'sha256',
    }),
    '362022bfac90f466c7ddbdfa8d40da38e041671d28daee9c320bfc57d224b357',
  )
})

test('enc api for sha384', t => {
  t.deepEqual(
    enc('mamba-cli', {
      method: 'sha384',
    }),
    'de44a9be2bfc43daa21f4e699a716e34312ed155a81a06866dd856cce391f7efb0329ab314f75c493ab59b03d5f0fd56',
  )
})

test('enc api for sha512', t => {
  t.deepEqual(
    enc('mamba-cli', {
      method: 'sha512',
    }),
    'b65649bd5ab246840a029f2d9578d76b0ec9cc0c08516060205a7392bcc213933060b57b8674c742b815677ba476ab62762a5c986bbf9aef077fe02321d90151',
  )
})

test('enc api for md5', t => {
  t.deepEqual(
    enc('mamba-cli', {
      method: 'md5',
    }),
    '7e0663c675a94e36e3716fc25b4dc4c7',
  )
})

test('enc api for base64', t => {
  t.deepEqual(
    enc('mamba-cli', {
      method: 'base64',
    }),
    'bWFtYmEtY2xp',
  )
})

test('enc api for hex', t => {
  t.deepEqual(
    enc('mamba-cli', {
      method: 'hex',
    }),
    '6d616d62612d636c69',
  )
})

test('enc api for aes', t => {
  t.deepEqual(
    enc('mamba-cli', {
      method: 'aes',
      key: 'mambalikeweb2019',
      iv: 'webbestlangworld',
    }),
    'd9abbab81e29ba7183bd5767969e7b1a',
  )
})
