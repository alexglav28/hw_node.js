import dotenv from 'dotenv';
dotenv.config();

import { app } from './index.js';
import { testConnection } from './db/index.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await testConnection();
  console.log(`Server on http://localhost:${PORT}`);
});
