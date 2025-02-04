import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
//
try {
  const mongodbURL = process.env.DB_URL;
  mongoose
    .connect(mongodbURL)
    .then(() => {
      console.log("CONNECTED to mongodb db sfully");
    })
    .catch((err) => {
      console.log("errror connecting to dbase");
    });
} catch (error) {
  console.error("error loading the enviroment variables", error);
}

const todoSchema = mongoose.Schema({
  title: String,

  description: String,

  completed: Boolean,
});

const todo = new mongoose.model("Todo", todoSchema);
export default todo;
