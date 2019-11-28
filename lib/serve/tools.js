const url = require('url')
const chalk = require('chalk')
const address = require('address')
const portfinder = require('portfinder')
const defaultGateway = require('default-gateway')

module.exports = {
  getPort(port) {
    return new Promise(resolve => {
      portfinder
        .getPortPromise({
          port,
        })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log(`getPort failed ${chalk.red(err)}.`)
          console.log(err)
        })
    })
  },
  parseUrl(hostname, port, bold = true, pathname = '/') {
    return url.format({
      protocol: 'http',
      hostname,
      port: bold ? chalk.bold(port) : port,
      pathname,
    })
  },
  getIp() {
    const result = defaultGateway.v4.sync()
    return address.ip(result && result.interface)
  },
}
