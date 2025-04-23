"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const app_config_1 = require("../app.config");
exports.conn = mysql2_1.default.createConnection({
    host: app_config_1.DB_HOST,
    port: Number(app_config_1.DB_PORT),
    user: app_config_1.DB_USER,
    password: app_config_1.DB_PASSWORD,
    database: app_config_1.DB_DATABASE
});
//# sourceMappingURL=mysql.js.map