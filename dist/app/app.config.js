"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_DATABASE = exports.DB_PASSWORD = exports.DB_USER = exports.DB_PORT = exports.DB_HOST = exports.APP_PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//应用配置
exports.APP_PORT = process.env.APP_PORT;
//数据库配置
_a = process.env, exports.DB_HOST = _a.DB_HOST, exports.DB_PORT = _a.DB_PORT, exports.DB_USER = _a.DB_USER, exports.DB_PASSWORD = _a.DB_PASSWORD, exports.DB_DATABASE = _a.DB_DATABASE;
//# sourceMappingURL=app.config.js.map