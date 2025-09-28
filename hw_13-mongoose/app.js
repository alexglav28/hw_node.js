// app.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// модели
import Publisher from "./models/Publisher.js";
import Magazine from "./models/Magazine.js";
import Tag from "./models/Tag.js";
import Article from "./models/Article.js";

dotenv.config();

const app = express();
app.use(express.json());

const { MONGODB_URI, PORT = 3000 } = process.env;
if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI missing in .env");
  process.exit(1);
}

/* ---------- Healthcheck ---------- */
app.get("/", (_req, res) => res.json({ ok: true, message: "HW13 Mongoose API" }));

/* ---------- Publisher ---------- */
// POST /publishers  { "name":"ACME", "location":"Berlin" }
app.post("/publishers", async (req, res, next) => {
  try {
    const pub = await Publisher.create(req.body);
    res.status(201).json(pub);
  } catch (e) { next(e); }
});

// GET /publishers
app.get("/publishers", async (_req, res, next) => {
  try {
    const list = await Publisher.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (e) { next(e); }
});

app.post("/magazines", async (req, res, next) => {
  try {
    const mag = await Magazine.create(req.body);
    res.status(201).json(mag);
  } catch (e) { next(e); }
});

app.get("/magazines", async (_req, res, next) => {
  try {
    const list = await Magazine.find().populate("publisher").sort({ createdAt: -1 });
    res.json(list);
  } catch (e) { next(e); }
});

app.post("/tags", async (req, res, next) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (e) { next(e); }
});

app.get("/tags", async (_req, res, next) => {
  try {
    const list = await Tag.find().populate("articles").sort({ createdAt: -1 });
    res.json(list);
  } catch (e) { next(e); }
});

app.post("/articles", async (req, res, next) => {
  try {
    const article = await Article.create(req.body);
    if (Array.isArray(article.tags) && article.tags.length > 0) {
      await Tag.updateMany({ _id: { $in: article.tags } }, { $addToSet: { articles: article._id } });
    }
    res.status(201).json(article);
  } catch (e) { next(e); }
});

app.get("/articles", async (_req, res, next) => {
  try {
    const list = await Article.find().populate("tags").sort({ createdAt: -1 });
    res.json(list);
  } catch (e) { next(e); }
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 400).json({ message: err.message || "Bad Request" });
});


mongoose.connection.on("connected", () => console.log("Mongoose connected"));
mongoose.connection.on("error", (e) => console.error("Mongoose error:", e.message));

try {
  await mongoose.connect(MONGODB_URI);
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (e) {
  console.error("❌ MongoDB connection failed:", e.message);
  process.exit(1);
}
