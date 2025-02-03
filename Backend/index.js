import express from "express";
import cors from "cors";
import { createTodo, updateTodo } from "./types.js";
import todo from "./db.js";
const app = express();
const port = process.env.PORT | 3300;
app.use(express.json());
app.use(cors()); // for strict use origin: host
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "please send the correct inputts",
    });
    return;
    //else database ka gali
  }
  await todo.create({
    title: createPayload.title, // according to the zod library
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "todo is created",
  });
});

app.get("/todos", async (req, res) => {
  const findTodo = await todo.find({});
  res.json({
    findTodo,
  });
});
app.put("/compeleted", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "requested data could not be found",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id, //database entery
    },
    {
      completed: true, //front end to update the todos
    }
  );
  res.json({
    msg: "Todo is marked as completed",
  });
});
app.listen(port, () => {
  console.log(`app is running on   http://localhost:${port}`);
});
