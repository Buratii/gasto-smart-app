import { Request, Response } from "express";
import CategoryService from "./category.service";

const categoryService = new CategoryService();

// Get all items
export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.getCategories(req, res);
};

// Get a single item
export const getCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.getCategory(req, res);
};

// Create an item
export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.createCategory(req, res);
};

// Update an item
export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.updateCategory(req, res);
};

// Delete an item
export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.deleteCategory(req, res);
};
