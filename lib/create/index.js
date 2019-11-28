const verify = require('./verify')
const select = require('./select')
const createVue = require('./create-vue')
const createReact = require('./create-react')
const createKoa = require('./create-koa')
const createActivePage = require('./create-active-page')

async function create(name, options) {
  const result = await verify.start(name, options)
  if (!result) return false
  const template = await select()
  const task = {
    vue: createVue,
    react: createReact,
    koa: createKoa,
    activePage: createActivePage,
  }[template]
  await task(result.name, result.context)
}

module.exports = (...args) => create(...args)
