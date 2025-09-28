import express from "express";
import dotenv from "dotenv";
import { connectToDatabase, getDb } from "./db/index.js";
import { HttpError } from "./utils/HttpError.js";
import { ObjectId } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ ok: true, message: "Products API with MongoDB" });
});

//post products
app.post("/products", async (req, res, next) => {
  try {
    const { name, price, description } = req.body;

    if (typeof name !== "string" || !name.trim()) {
      throw new HttpError(400, "Field 'name' is required (string).");
    }
    if (typeof price !== "number" || Number.isNaN(price)) {
      throw new HttpError(400, "Field 'price' is required (number).");
    }
    if (description != null && typeof description !== "string") {
      throw new HttpError(
        400,
        "Field 'description' must be a string if provided."
      );
    }

    const doc = {
      name: name.trim(),
      price,
      description: description?.trim() ?? "",
      createdAt: new Date(),
    };
    const db = getDb();
    const result = await db.collection("products").insertOne(doc);

    res.status(201).json({ _id: result.insertedId, ...doc });
  } catch (err) {
    next(err);
  }
});

//  GET /products
app.get("/products", async (req, res, next) => {
  try {
    const db = getDb();
    const items = await db
      .collection("products")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
});

// GET /products/:id
app.get("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) throw new HttpError(400, "Invalid product id.");

    const db = getDb();
    const item = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
    if (!item) throw new HttpError(404, "Product not found");

    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
});

//PUT /products/:id
app.put("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) throw new HttpError(400, "Invalid product id.");

    const { name, price, description } = req.body;
    const update = {};
    if (name !== undefined) {
      if (typeof name !== "string" || !name.trim())
        throw new HttpError(400, "Invalid 'name'");
      update.name = name.trim();
    }
    if (price !== undefined) {
      if (typeof price !== "number" || Number.isNaN(price))
        throw new HttpError(400, "Invalid 'price'");
      update.price = price;
    }
    if (description !== undefined) {
      if (typeof description !== "string")
        throw new HttpError(400, "Invalid 'description'");
      update.description = description.trim();
    }
    if (Object.keys(update).length === 0)
      throw new HttpError(400, "No valid fields to update.");

    const db = getDb();
    const result = await db
      .collection("products")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: update },
        { returnDocument: "after" }
      );

    if (!result.value) throw new HttpError(404, "Product not found");
    res.status(200).json(result.value);
  } catch (err) {
    next(err);
  }
});

//DELETE /products/:id
app.delete("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) throw new HttpError(400, "Invalid product id.");

    const db = getDb();
    const result = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0)
      throw new HttpError(404, "Product not found");

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});



// 404
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// error
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status ?? 500;
  const message = err.message ?? "Internal Server Error";
  res.status(status).json({ message });
});

//start
const start = async () => {
  try {
    await connectToDatabase();
    console.log("Connected successfully to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  } catch (e) {
    console.error("Failed to start server:", e.message);
    process.exit(1);
  }
};

start();
