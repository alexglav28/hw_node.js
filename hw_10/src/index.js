import "dotenv/config";
import { createServer } from "./server.js";

const port = process.env.PORT || 3333;
const app = createServer();

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
