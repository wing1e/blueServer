"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = require("./app/app.config");
const app_1 = __importDefault(require("./app/app"));
const mysql_1 = require("./app/database/mysql");
app_1.default.listen(app_config_1.APP_PORT, () => {
    console.log('服务器启动成功!!!🚀🚀🚀🚀🚀🚀');
});
mysql_1.conn.connect(err => {
    if (err) {
        console.log("数据库连接失败", err);
    }
    else {
        console.log("数据库连接成功!!!");
    }
});
//# sourceMappingURL=main.js.map