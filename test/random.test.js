const test = require('ava');
const random = require('../lib/random');

test('random api', async t => {
  const res = await random(16);
  t.deepEqual(res.length, 16);
});
