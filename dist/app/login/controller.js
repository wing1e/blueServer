"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wxLogin = void 0;
const console_1 = require("console");
// 微信登录
const wxLogin = async (req, res, next) => {
    (0, console_1.log)(req.body);
    res.send({ mes: '请求成功' });
};
exports.wxLogin = wxLogin;
//# sourceMappingURL=controller.js.map