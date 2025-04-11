import { Request, Response } from "express";
import ExpenseService from "./expense.service";

const expenseService = new ExpenseService();

// Get all items
export const getExpenses = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.getExpenses(req, res);
};

// Get a single item
export const getExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.getExpense(req, res);
};

// Create an item
export const createExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.createExpense(req, res);
};

// Update an item
export const updateExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.updateExpense(req, res);
};

// Delete an item
export const deleteExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.deleteExpense(req, res);
};
