import { configDotenv } from "dotenv";
import mongoose from "mongoose";
// configDotenv();
//
const mongodbURL =
  "mongodb+srv://gaashaamox1:waaniga@aniga.f44ba.mongodb.net/Todos";
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("CONNECTED to mongodb db sfully");
  })
  .catch((err) => {
    console.log("errror connecting to dbase");
  });
const todoSchema = mongoose.Schema({
  title: String,

  description: String,

  completed: Boolean,
});

const todo = new mongoose.model("Todo", todoSchema);
export default todo;
