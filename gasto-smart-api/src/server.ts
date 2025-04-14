import "dotenv/config";

import express from "express";
import connectDB from "./config/db";
import categoryRoutes from "./routes/categories";
import expenseRoutes from "./routes/expenses";

connectDB();

const app = express();

app.use(express.json());

app.use("/category", categoryRoutes);
app.use("/expense", expenseRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT);
