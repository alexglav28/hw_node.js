import express from "express";
import { pool } from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// --- 
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/", (req, res) => {
  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'Поле "message" обязательно' });
  res.status(201).json({ received: message });
});

// --- 
app.get("/products", async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

app.post("/products", async (req, res, next) => {
  try {
    const { name, price } = req.body || {};
    if (!name || price == null) {
      return res.status(400).json({ error: "Укажите name и price" });
    }
    const [result] = await pool.query(
      "INSERT INTO products (name, price) VALUES (?, ?)",
      [name, price]
    );
    res.status(201).json({ id: result.insertId, name, price });
  } catch (err) {
    next(err);
  }
});

// ---  
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// --- 
app.use((err, req, res, next) => {
  console.error("Ошибка:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
