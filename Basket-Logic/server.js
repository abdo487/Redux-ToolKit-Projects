import Express, { json } from "express";
import Products from "./Products/index.js";
import cors from "cors";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = new Express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose
  .connect("mongodb://localhost:27017/Basket-Logic")
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

// midleware
app.use(json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// assets
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(
  "/assets",
  Express.static(path.join(__dirname, "./Products/Assets/images"))
);

app.use("/api/products", Products);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
