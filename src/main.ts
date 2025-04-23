import {APP_PORT} from "./app/app.config"
import app from "./app/app"
import {conn} from "./app/database/mysql"
app.listen(APP_PORT, () => {
  console.log('服务器启动成功!!!🚀🚀🚀🚀🚀🚀');
})

conn.connect(err => {
  if (err) {
    console.log("数据库连接失败/(ㄒoㄒ)/~~", err);
  } else {
    console.log("数据库连接成功!!!(*^_^*)");
  }
})

