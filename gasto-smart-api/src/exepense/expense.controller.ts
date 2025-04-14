import { Request, Response } from "express";
import ExpenseService from "./expense.service";

const expenseService = new ExpenseService();

export const getExpenses = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.getExpenses(req, res);
};

export const getExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.getExpense(req, res);
};

export const createExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.createExpense(req, res);
};

export const updateExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.updateExpense(req, res);
};

export const deleteExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  await expenseService.deleteExpense(req, res);
};
