import { Request, Response } from "express";
import Category from "../models/Category";

// Get all items
export const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await Category.find();
    res.status(200).json(items);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single item
export const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await Category.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: "Item not found" });
      return;
    }
    res.status(200).json(item);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create an item
export const createItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newItem = new Category(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update an item
export const updateItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedItem = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedItem) {
      res.status(404).json({ message: "Item not found" });
      return;
    }

    res.status(200).json(updatedItem);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an item
export const deleteItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const item = await Category.findByIdAndDelete(req.params.id);

    if (!item) {
      res.status(404).json({ message: "Item not found" });
      return;
    }

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
