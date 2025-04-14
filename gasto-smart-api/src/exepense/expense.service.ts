import { Request, Response } from "express";
import Expense from "../models/Expense";

class ExpenseService {
  constructor() {}

  async getExpenses(req: Request, res: Response): Promise<void> {
    try {
      const items = await Expense.find()
        .populate("category")
        .sort([["createdAt", -1]]);
      res.status(200).json(items);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async getExpense(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const expense = await Expense.findById(id).populate("category");

      if (!expense) {
        res.status(404).json({ message: "Expense not found" });
      }

      res.status(200).json(expense);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async createExpense(req: Request, res: Response): Promise<void> {
    try {
      const expenseData = req.body;
      const newExpense = new Expense(expenseData);
      const savedExpense = await newExpense.save();
      res.status(201).json(savedExpense);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async updateExpense(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const expenseData = req.body;

      const updatedExpense = await Expense.findByIdAndUpdate(id, expenseData, {
        new: true,
      });

      if (!updatedExpense) {
        res.status(404).json({ message: "Expense not found" });
      }

      res.status(200).json(updatedExpense);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async deleteExpense(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedExpense = await Expense.findByIdAndDelete(id);

      if (!deletedExpense) {
        res.status(404).json({ message: "Expense not found" });
      }

      res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private handleError(res: Response, error: any): void {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
}

export default ExpenseService;
