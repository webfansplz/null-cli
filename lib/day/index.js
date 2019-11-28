const dayjs = require('dayjs');

function day(time, { type, format }) {
  if (type === 'string') {
    const res = dayjs(Number(time)).format(format);
    console.log(res);
    return res;
  }
  if (type === 'unix') {
    const res = dayjs(time).valueOf();
    console.log(res);
    return res;
  }
}
module.exports = day;
