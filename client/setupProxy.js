const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/payment", { target: "http://localhost:5001" }));
};
