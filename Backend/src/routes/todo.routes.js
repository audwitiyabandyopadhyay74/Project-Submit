import express from "express";
import {
  addTodoItem,
  updateTodoItem,
  getAllTodoItems,
  deleteTodoItem,
  markTaskAsComplete,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/add", addTodoItem);
router.put("/update", updateTodoItem);
router.get("/all", getAllTodoItems);
router.delete("/delete/:id", deleteTodoItem);
router.post("/complete/:id", markTaskAsComplete); // Mark task as complete

export default router;
