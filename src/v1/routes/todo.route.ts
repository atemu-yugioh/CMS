import express from "express";
import TodoController from "../controller/todo.controller";

export const routes = express.Router();

// * Create Todo
routes.post("/todo", TodoController.create);

// * Get list Todo
routes.get("/todo", TodoController.readPagination);

// * Get detail Todo
routes.get("/todo/:id", TodoController.readById);

// * Update Todo By Id
routes.patch("/todo/:id", TodoController.update);
