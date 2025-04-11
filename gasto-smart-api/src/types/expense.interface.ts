import { Document, Types } from "mongoose";

export interface IExpense extends Document {
  name: string;
  amount: number;
  category: Types.ObjectId;
  createdAt: Date;
}
