const test = require('ava')
const enc = require('../lib/enc')

test('enc api for sha1', t => {
  t.deepEqual(
    enc('null-cli', {
      method: 'sha1',
    }),
    'a0071acf7a33712783545db8b4a7a89f0a35013d',
  )
})

test('enc api for sha224', t => {
  t.deepEqual(
    enc('null-cli', {
      method: 'sha224',
    }),
    '1b0dcf9ea78c755266cf0d1d652d741fa4112770fef5889f9411c090',
  )
})

test('enc api for sha256', t => {
  t.deepEqual(
    enc('null-cli', {
      method: 'sha256',
    }),
    'fe8f4fa399ff4888b4d393c8dd09ba35385db71e12d627d83cc65d89ba83fc9b',
  )
})

test('enc api for sha384', t => {
  t.deepEqual(
    enc('null-cli', {
      method: 'sha384',
    }),
    'c366ef75eb44fd3839bc1edb980b3c4907d78541ec2a30f7d20d228eb7b77563aaffce492f26d84bd0a5c8cffcedebc4',
  )
})

test('enc api for sha512', t => {
  t.deepEqual(
    enc('null-cli', {
      method: 'sha512',
    }),
    '72d921a66c4d2ed07a282cc9be1a804e4409a12bf77acefd9977d8b9d170556b70546769944d3c853a5e788999495742109940935f8463eeac6aba7507ac2883',
  )
})

test('enc api for md5', t => {
  t.deepEqual(
    enc('null-cli', {
      method: 'md5',
    }),
    '91732209f7c84dd6119c81fd8b1a9669',
  )
})

test('enc api for base64', t => {
  t.deepEqual(
    enc('null-cli', {
      method: 'base64',
    }),
    'bnVsbC1jbGk=',
  )
})

test('enc api for hex', t => {
  t.deepEqual(
    enc('null-cli', {
      method: 'hex',
    }),
    '6e756c6c2d636c69',
  )
})

test('enc api for aes', t => {
  t.deepEqual(
    enc('null-cli', {
      method: 'aes',
      key: '20201111nullbest',
      iv: 'webbestlangworld',
    }),
    'b425ed8b1698de56aed3d1089ade239d',
  )
})
