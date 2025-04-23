import mysql from "mysql2";
import {DB_DATABASE,DB_HOST,DB_PASSWORD,DB_PORT,DB_USER}from "../app.config";

export const conn = mysql.createConnection({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
})
