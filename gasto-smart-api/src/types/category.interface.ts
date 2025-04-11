export interface ICategory {
  name: string;
  description: string;
  createdAt: Date;
}

export interface IItemDocument extends ICategory, Document {
  _id: string;
}
