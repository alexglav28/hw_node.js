import express from "express";
import { testConnection } from "./config/db.js";
import Book from "./models/book.js";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => res.json({ ok: true }));

app.get("/books", async (_req, res) => {
  try {
    const rows = await Book.findAll({ order: [["id", "ASC"]] });
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/books", async (req, res) => {
  try {
    const { title, author, year } = req.body;
    if (!title || !author)
      return res.status(400).json({ error: "title & author are required" });
    const y = Number(year);
    if (!Number.isInteger(y))
      return res.status(400).json({ error: "year must be integer" });
    const row = await Book.create({ title, author, year: y });
    res.status(201).json(row);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const patch = {};
    if (req.body.title !== undefined) patch.title = req.body.title;
    if (req.body.author !== undefined) patch.author = req.body.author;
    if (req.body.year !== undefined) {
      const y = Number(req.body.year);
      if (!Number.isInteger(y))
        return res.status(400).json({ error: "year must be integer" });
      patch.year = y;
    }
    const [count] = await Book.update(patch, { where: { id } });
    if (count === 0) return res.status(404).json({ error: "Book not found" });
    const updated = await Book.findByPk(id);
    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const count = await Book.destroy({ where: { id } });
    if (count === 0) return res.status(404).json({ error: "Book not found" });
    res.json({ ok: true, deleted: count });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await testConnection();
  console.log(`Server on http://localhost:${PORT}`);
});
