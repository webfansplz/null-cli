const chalk = require('chalk');
const request = require('request');
const { logWithSpinner, stopSpinner } = require('../../utils/spinner');

function fetch(url) {
  logWithSpinner('Requesting...');
  request(
    {
      url,
      method: 'get',
    },
    (err, res) => {
      stopSpinner('Request finish');
      if (err) {
        console.log(`Http request ${chalk.red(err)}.`);
        return;
      }
      if (res.statusCode === 200) {
        console.log(JSON.parse(res.body));
      } else {
        console.log(`Http request Error : ${chalk.red(res.statusCode)}.`);
      }
    },
  );
}

module.exports = fetch;
