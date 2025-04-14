import { z } from "zod";

export const CategoryResponseSchema = z.object({
  _id: z.string(),
  name: z.string(),
  icon: z.string(),
  createdAt: z.string(),
  __v: z.number(),
});

export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;

export const CreateCategorySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

export type CreateCategoryBody = z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema = z.object({
  id: z.string().min(1, { message: "ID is required" }),
  name: z.string().min(1, { message: "Name is required" }),
});

export type UpdateCategoryBody = z.infer<typeof UpdateCategorySchema>;

export const GetCategoriesResponseSchema = z.array(CategoryResponseSchema);
export type GetCategoriesResponse = z.infer<typeof GetCategoriesResponseSchema>;

export const DeleteCategoryResponseSchema = z.object({
  message: z.string(),
});
export type DeleteCategoryResponse = z.infer<
  typeof DeleteCategoryResponseSchema
>;
