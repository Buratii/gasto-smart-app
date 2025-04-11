import mongoose, { Schema, model } from "mongoose";
import { ICategory } from "../types/category.interface";

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<ICategory>("Category", CategorySchema);
