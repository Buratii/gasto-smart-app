import "dotenv/config";

import express from "express";
import connectDB from "./config/db";
import categoryRoutes from "./routes/categories";
import expenseRoutes from "./routes/expenses";

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Routes
app.use("/category", categoryRoutes);
app.use("/expense", expenseRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
