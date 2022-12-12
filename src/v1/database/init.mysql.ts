import mysql from "mysql2";
import config from "../../config/config";

const mysqlConnection = () => {
  const mysqlCon = mysql.createConnection({
    port: config.mysql.port as unknown as number,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
  });

  mysqlCon.connect((err) => {
    if (err) throw err;
    console.log("Mysql connected !!");
  });
};

export default mysqlConnection;
