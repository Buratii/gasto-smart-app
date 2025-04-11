import {
  createExpense,
  deleteExpense,
  getExpense,
  getExpenses,
  updateExpense,
} from "../exepense/expense.controller";
import { Router } from "express";

const router = Router();

router.get("/", getExpenses);
router.get("/:id", getExpense);
router.post("/", createExpense);
router.put("/update/:id", updateExpense);
router.delete("/delete/:id", deleteExpense);

export default router;
