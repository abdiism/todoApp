import { z } from "zod";
const createTodo = z.object({
  title: z.string(),
  description: z.string(), //qawska ha ilaabin mrnaba
});
const updateTodo = z.object({
  id: z.string(), //qawska ha ilaabin mrnaba
});
export { createTodo, updateTodo };
