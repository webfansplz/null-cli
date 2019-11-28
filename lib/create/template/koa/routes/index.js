const Router = require("koa-router");
const { list, create } = require("../controllers/index");
const Routers = new Router({
  prefix: "/api/v1"
});
/**
 * 接口
 */
Routers.get("/index", list);
Routers.post("/index/create", create);

module.exports = Routers;
