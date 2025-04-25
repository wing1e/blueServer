
import { Request, Response, NextFunction } from "express";
import { getSession } from "./service";

// 微信登录
export const wxLogin = async (req: Request, res: Response, next: NextFunction) => {
    const code = req.body?.code;
    const userinfo =await getSession(code);
    console.log(userinfo);
    
    res.send({mes:'请求成功'});
};