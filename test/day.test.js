const test = require('ava')
const day = require('../lib/day')

test('day api for string type', t => {
  t.deepEqual(
    day(1574670690000, {
      type: 'string',
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    '2019-11-25 16:31:30',
  )
})

test('day api for unix type', t => {
  t.deepEqual(
    day('2020-01-01 18:18:18', {
      type: 'unix',
    }),
    1577873898000,
  )
})
