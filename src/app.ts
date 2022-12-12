import express from "express";
import config from "./config/config";
import routes from "./v1/routes/index.route";
import mongoDBConnection from "./v1/database/init.mongodb";
import mysqlConnection from "./v1/database/init.mysql";
import { connect } from "./v1/database/init.sequelize";

const port = config.port as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);

  mongoDBConnection();

  mysqlConnection();

  connect();

  routes(app);
});
