const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const xssClean = require("xss-clean");
require("dotenv").config();

const commonMiddleware = (server) => {
  server.use(helmet());
  server.use(cors({ origin: "*" }));
  server.use(xssClean());
  server.use(compression());
  server.use(bodyParser.json({ limit: "10kb" }));
};

module.exports = { commonMiddleware };
