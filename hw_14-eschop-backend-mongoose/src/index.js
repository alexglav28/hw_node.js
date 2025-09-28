import "dotenv/config";
import app from "./app.js";
import { connectDatabase } from "./db/connectDatabase.js";

const { PORT = 3000, MONGODB_URI } = process.env;

const bootstrap = async () => {
  await connectDatabase(MONGODB_URI);
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

bootstrap();
