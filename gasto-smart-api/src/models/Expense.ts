import { Schema, model } from "mongoose";
import { IExpense } from "../types/expense.interface";

const ExpenseSchema = new Schema<IExpense>({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<IExpense>("Expenses", ExpenseSchema);
