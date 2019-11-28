class Index {
  static list(ctx) {
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: 'Hello Mamba-cli',
      data: [],
    }
  }

  static create(ctx) {
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: 'Hello Mamba-cli',
      data: [],
    }
  }
}
module.exports = Index
