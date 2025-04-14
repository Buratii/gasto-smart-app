import { api } from "@service/api";
import Toast from "react-native-toast-message";
import {
  CreateExpenseBody,
  CreateExpenseResponseSchema,
  DeleteExpenseResponseSchema,
  ExpenseResponse,
  ExpenseResponseSchema,
  GetExpensesResponse,
  GetExpensesResponseSchema,
  UpdateExpenseBody,
} from "./expense.validation";
import { handleZodError } from "utils/handleZodError";
import { ZodError } from "zod";

export interface ExpenseMutationProps {
  getExpenses: () => Promise<GetExpensesResponse>;
  getExpense: (id: string) => Promise<ExpenseResponse>;
  createExpense: (body: CreateExpenseBody) => Promise<void>;
  updateExpense: (body: UpdateExpenseBody) => Promise<void>;
  deleteExpense: (id: string) => Promise<void>;
}

export default function expenseMutation(): ExpenseMutationProps {
  const getExpenses = async () => {
    try {
      const response = await api.get("/expense");

      const validatedResponse = GetExpensesResponseSchema.safeParse(
        response.data
      );

      if (!validatedResponse.success) {
        const error = new ZodError(validatedResponse.error.errors);
        return handleZodError(error);
      }

      return validatedResponse.data;
    } catch (error) {
      return handleZodError(error);
    }
  };

  const getExpense = async (id: string) => {
    try {
      const response = await api.get(`/expense/${id}`);

      const validatedResponse = ExpenseResponseSchema.safeParse(response.data);

      if (!validatedResponse.success) {
        const error = new ZodError(validatedResponse.error.errors);
        return handleZodError(error);
      }

      return validatedResponse.data;
    } catch (error) {
      return handleZodError(error);
    }
  };

  const createExpense = async (body: CreateExpenseBody) => {
    try {
      const response = await api.post("/expense", body);

      const validatedResponse = CreateExpenseResponseSchema.safeParse(
        response.data
      );

      if (!validatedResponse.success) {
        const error = new ZodError(validatedResponse.error.errors);
        return handleZodError(error);
      }

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Gasto cadastrado com sucesso",
        position: "bottom",
      });
    } catch (error) {
      return handleZodError(error);
    }
  };

  const updateExpense = async (body: UpdateExpenseBody) => {
    try {
      const response = await api.put(`/expense/update/${body.id}`, {
        name: body.name,
      });

      const validatedResponse = ExpenseResponseSchema.safeParse(response.data);

      if (!validatedResponse.success) {
        const error = new ZodError(validatedResponse.error.errors);
        return handleZodError(error);
      }

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Gasto atualizado!",
        position: "bottom",
      });
    } catch (error) {
      return handleZodError(error);
    }
  };

  const deleteExpense = async (id: string) => {
    try {
      const response = await api.delete(`/expense/delete/${id}`);

      const validatedResponse = DeleteExpenseResponseSchema.safeParse(
        response.data
      );

      if (!validatedResponse.success) {
        const error = new ZodError(validatedResponse.error.errors);
        return handleZodError(error);
      }

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Categoria deletada!",
        position: "bottom",
      });
    } catch (error) {
      return handleZodError(error);
    }
  };

  return {
    getExpenses: getExpenses,
    getExpense: getExpense,
    createExpense: createExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
}
