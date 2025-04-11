import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import itemRoutes from "./routes/categories";

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app: Application = express();

// Body parser
app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
