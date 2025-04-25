import axios from "axios";
import { APP_ID, APP_SECRET } from "../app.config";

export const getSession =async (code:string) => {
    try{
        const code2Session = `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`
        const result = await axios.get(code2Session);
        return result.data;
        
    }catch(err){
        
    }
};
