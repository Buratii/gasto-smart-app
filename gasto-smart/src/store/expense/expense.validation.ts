import { CategoryResponseSchema } from "@store/category/category.validation";
import { z } from "zod";

export const ExpenseResponseSchema = z.object({
  _id: z.string(),
  name: z.string(),
  amount: z.number(),
  category: CategoryResponseSchema,
  createdAt: z.string(),
  __v: z.number(),
});

export type ExpenseResponse = z.infer<typeof ExpenseResponseSchema>;

export const GetExpensesResponseSchema = z.array(ExpenseResponseSchema);
export type GetExpensesResponse = z.infer<typeof GetExpensesResponseSchema>;

export const CreateExpenseSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  amount: z.number().min(1, { message: "Amount is required" }),
  category: z.string().min(1, { message: "Category is required" }),
});
export type CreateExpenseBody = z.infer<typeof CreateExpenseSchema>;

export const CreateExpenseResponseSchema = z.object({
  _id: z.string(),
  name: z.string(),
  amount: z.number(),
  category: z.string(),
  createdAt: z.string(),
  __v: z.number(),
});

export type CreateExpenseResponse = z.infer<typeof CreateExpenseResponseSchema>;

export const UpdateExpenseSchema = z.object({
  id: z.string().min(1, { message: "ID is required" }),
  name: z.string().min(1, { message: "Name is required" }),
});

export type UpdateExpenseBody = z.infer<typeof UpdateExpenseSchema>;

export const DeleteExpenseResponseSchema = z.object({
  message: z.string(),
});
export type DeleteExpenseResponse = z.infer<typeof DeleteExpenseResponseSchema>;
