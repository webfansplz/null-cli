const fs = require('fs')

function base64(file) {
  const image = fs.readFileSync(file)
  const base64str = Buffer.from(image, 'binary').toString('base64')
  console.log(base64str)
}
module.exports = base64
