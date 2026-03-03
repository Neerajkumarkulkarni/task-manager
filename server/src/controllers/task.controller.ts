import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../models/task.model";
import { successResponse, errorResponse } from "../utils/response";

let tasks: Task[] = [];

export const getTasks = (_: Request, res: Response) => {
  res.json(successResponse(tasks));
};

export const createTask = (req: Request, res: Response) => {
  const { title, description, priority, status } = req.body;

  if (!title) {
    return res.status(400).json(errorResponse("Title is required"));
  }

  if (!["LOW", "MEDIUM", "HIGH"].includes(priority)) {
    return res.status(400).json(errorResponse("Invalid priority"));
  }

  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    priority,
    status: status || "TODO",
  };

  tasks.push(newTask);
  res.status(201).json(successResponse(newTask));
};

export const deleteTask = (req: Request, res: Response) => {
  tasks = tasks.filter(t => t.id !== req.params.id);
  res.json(successResponse("Deleted"));
};