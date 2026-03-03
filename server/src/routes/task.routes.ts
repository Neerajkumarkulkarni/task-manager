import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
} from "../controllers/task.controller";
import { requireDeleteAuth } from "../middleware/auth.middleware";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", requireDeleteAuth, deleteTask);

export default router;