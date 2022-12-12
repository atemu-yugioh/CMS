import * as dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT_APP,
  host: process.env.HOST,
  mongo_uri: process.env.MONGO_URI,
  mysql: {
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
  },
  salt: 10,
  private_key: "privateKey",
};
