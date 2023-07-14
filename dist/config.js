"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();

//se toman los datos de la bas ede datos que estan en el archivo .env
var _default = {
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_DATABASE || "proyecto_sinvex",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || ""
};
exports["default"] = _default;