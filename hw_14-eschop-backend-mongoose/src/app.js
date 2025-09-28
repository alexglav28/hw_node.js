import express from "express";
import categoryRouter from "./routers/category.router.js";
import productRouter from "./routers/product.router.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/products", productRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(errorHandler);

export default app;
