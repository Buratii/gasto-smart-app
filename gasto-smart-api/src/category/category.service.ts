import Expense from "../models/Expense";
import Category from "../models/Category";
import { Request, Response } from "express";

class CategoryService {
  constructor() {}

  async getCategories(req: Request, res: Response): Promise<void> {
    try {
      const items = await Category.find();
      res.status(200).json(items);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async getCategory(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const category = await Category.findById(id);

      if (!category) {
        res.status(404).json({ message: "Category not found" });
      }

      res.status(200).json(category);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async createCategory(req: Request, res: Response): Promise<void> {
    try {
      const categoryData = req.body;
      const newCategory = new Category(categoryData);
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async updateCategory(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const categoryData = req.body;

      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        categoryData,
        { new: true }
      );

      if (!updatedCategory) {
        res.status(404).json({ message: "Category not found" });
      }

      res.status(200).json(updatedCategory);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async deleteCategory(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedCategory = await Category.findByIdAndDelete(id);

      if (!deletedCategory) {
        res.status(404).json({ message: "Category not found" });
        return;
      }

      const expense = await Expense.findOne({ category: id });

      if (expense) {
        res.status(400).json({
          message:
            "Cannot delete category because it is associated with an expense",
        });
        return;
      }

      res.status(200).json({ message: "Category deleted successfully" });
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

export default CategoryService;
