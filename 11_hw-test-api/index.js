import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let nextId = 4;
let products = [
  { id: 1, name: "Laptop", price: 1299.99 },
  { id: 2, name: "Mouse", price: 19.99 },
  { id: 3, name: "Keyboard", price: 49.99 },
];

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.status(200).json(product);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  if (typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json({ message: "Field 'name' is required (string)" });
  }
  if (typeof price !== "number" || Number.isNaN(price)) {
    return res
      .status(400)
      .json({ message: "Field 'price' is required (number)" });
  }
  const newProduct = { id: nextId++, name: name.trim(), price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`);
});
