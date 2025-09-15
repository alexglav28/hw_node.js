import express from 'express';
import sequelize, { testConnection } from './config/db.js';
import App from './models/App.js';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.json({ ok: true }));


app.get('/apps', async (_req, res) => {
  try {
    const rows = await App.findAll({ order: [['id', 'ASC']] });
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


app.post('/apps', async (req, res) => {
  try {
    const { name, size } = req.body;
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'name is required (string)' });
    }
    const parsedSize = Number(size);
    if (!Number.isInteger(parsedSize)) {
      return res.status(400).json({ error: 'size must be integer' });
    }
    const row = await App.create({ name, size: parsedSize });
    res.status(201).json(row);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await testConnection(); 
  console.log(`🚀 Server on http://localhost:${PORT}`);
});
