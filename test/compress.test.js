const fs = require('fs');
const test = require('ava');
const path = require('path');
const compress = require('../lib/compress');

test('compress api for html', async t => {
  const filepath = path.join(__dirname, './html/compress.html');
  const body = fs.readFileSync(filepath);
  console.log(body);
  const res =    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0"><meta name="viewport" content="width=device-width,viewport-fit=cover"><meta http-equiv="X-UA-Compatible" content="ie=edge"><style>#content{height:100%}</style></head><body><div id="content">hello,null-cli</div></body><script>function hello(l){console.log(l)}hello("world")</script></html>';
  t.deepEqual(await compress(filepath), res);
});
