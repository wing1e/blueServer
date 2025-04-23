import dotenv from "dotenv";

dotenv.config();

//应用配置
export const { APP_PORT } = process.env;

//数据库配置
export const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
