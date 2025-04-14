import { api } from "@service/api";
import Toast from "react-native-toast-message";
import { ZodError } from "zod";
import {
  CategoryResponse,
  CategoryResponseSchema,
  CreateCategoryBody,
  DeleteCategoryResponse,
  DeleteCategoryResponseSchema,
  GetCategoriesResponse,
  GetCategoriesResponseSchema,
  UpdateCategoryBody,
} from "./category.validation";
import { handleZodError } from "utils/handleZodError";

export interface CategoryMutationProps {
  getCategories: () => Promise<GetCategoriesResponse>;
  getCategory: (id: string) => Promise<CategoryResponse>;
  createCategory: (body: CreateCategoryBody) => Promise<void>;
  updateCategory: (body: UpdateCategoryBody) => Promise<void>;
  deleteCategory: (id: string) => Promise<void>;
}

export default function categoryMutation(): CategoryMutationProps {
  const getCategories = async () => {
    try {
      const response = await api.get("/category");
      const validatedResponse = GetCategoriesResponseSchema.safeParse(
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

  const getCategory = async (id: string) => {
    try {
      const response = await api.get(`/category/${id}`);
      const validatedResponse = CategoryResponseSchema.safeParse(response.data);

      if (!validatedResponse.success) {
        const error = new ZodError(validatedResponse.error.errors);
        return handleZodError(error);
      }

      return validatedResponse.data;
    } catch (error) {
      return handleZodError(error);
    }
  };

  const createCategory = async (body: CreateCategoryBody) => {
    try {
      const response = await api.post("/category", body);
      const validatedResponse = CategoryResponseSchema.safeParse(response.data);

      if (!validatedResponse.success) {
        const error = new ZodError(validatedResponse.error.errors);
        return handleZodError(error);
      }

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Categoria cadastrada com sucesso",
        position: "bottom",
      });
    } catch (error) {
      return handleZodError(error);
    }
  };

  const updateCategory = async (body: UpdateCategoryBody) => {
    try {
      const response = await api.put(`/category/update/${body.id}`, {
        name: body.name,
      });

      const validatedResponse = CategoryResponseSchema.safeParse(response.data);

      if (!validatedResponse.success) {
        const error = new ZodError(validatedResponse.error.errors);
        return handleZodError(error);
      }

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Categoria atualizada!",
        position: "bottom",
      });
    } catch (error) {
      return handleZodError(error);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      const response = await api.delete(`/category/delete/${id}`);
      const validatedResponse = DeleteCategoryResponseSchema.safeParse(
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
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
}
