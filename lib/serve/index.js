const path = require('path')
const browser = require('open')
const chalk = require('chalk')
const express = require('express')
const { getPort, getIp, parseUrl } = require('./tools')

const app = express()

async function serve(target, { port, open }) {
  const serverPort = await getPort(port)
  const inCurrent = target === '.'
  const name = inCurrent ? process.cwd() : target
  const cwd = path.isAbsolute(name) ? name : path.join(process.cwd(), name)
  app.use(express.static(cwd))
  app.listen(serverPort, async () => {
    console.log()
    console.log(' 🎉 App running at:')
    console.log(`  - Local:   ${chalk.cyan(parseUrl('localhost', serverPort))}`)
    console.log(`  - Network: ${chalk.cyan(parseUrl(getIp(), serverPort))}`)
    if (open) {
      await browser(parseUrl('localhost', serverPort, false))
    }
  })
}

module.exports = serve
