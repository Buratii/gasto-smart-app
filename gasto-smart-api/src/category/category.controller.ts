import { Request, Response } from "express";
import CategoryService from "./category.service";

const categoryService = new CategoryService();

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.getCategories(req, res);
};

export const getCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.getCategory(req, res);
};

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.createCategory(req, res);
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.updateCategory(req, res);
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  await categoryService.deleteCategory(req, res);
};
