const test = require('ava');
const { list } = require('../lib/regex/list');

test('regex api', t => {
  list.choices.forEach(({ value, example }) => {
    t.deepEqual(new RegExp(value).test(example), true);
  });
});
