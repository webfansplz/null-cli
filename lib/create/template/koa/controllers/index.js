class Index {
  static list(ctx) {
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: 'Hello Null-cli',
      data: [],
    }
  }

  static create(ctx) {
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: 'Hello Null-cli',
      data: [],
    }
  }
}
module.exports = Index
