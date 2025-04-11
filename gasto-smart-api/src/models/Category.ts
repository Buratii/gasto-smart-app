import { Schema, model } from "mongoose";
import { ICategory } from "../types/category.interface";

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<ICategory>("Categories", CategorySchema);
