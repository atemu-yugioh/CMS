import mongoose from "mongoose";
import config from "../../config/config";

const mongoDBConnection = () => {
  const dbUri = config.mongo_uri as string;

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log("MongoDb connected !!");
    })
    .catch((error) => {
      console.log("error", error);
      process.exit(1);
    });
};

export default mongoDBConnection;
