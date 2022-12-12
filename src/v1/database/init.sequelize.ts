import { Sequelize } from "sequelize";
import config from "../../config/config";

export const db = new Sequelize(
  "test",
  config.mysql.user as string,
  config.mysql.password as string,
  {
    host: config.mysql.host as string,
    dialect: "mysql",
  }
);

export const connect = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    db.sync().then(() => {
      console.log("connect to db");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// export { connect, db };
