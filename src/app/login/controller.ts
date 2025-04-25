import { log } from "console";
import { Request, Response, NextFunction } from "express";

// 微信登录
export const wxLogin = async (req: Request, res: Response, next: NextFunction) => {
    log(req.body);
    res.send({mes:'请求成功'});
};