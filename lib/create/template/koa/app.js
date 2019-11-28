const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const onerror = require("koa-onerror");
const logger = require("koa-logger");
const cors = require("koa-cors");
const json = require("koa-json");
const Routers = require("./routes/index");
const config = require("./config/index");

// cors
app.use(cors());

//error handler
onerror(app);

app.use(
  bodyParser({
    formLimit: "1mb"
  })
);

//JSON response
app.use(json());

//logger
app.use(logger());

//路由
app.use(Routers.routes());

app.listen(config.port);

console.log(`🚀  server listen on  ${config.host}:${config.port}`);
