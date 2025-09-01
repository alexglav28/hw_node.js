import "dotenv/config";
import { promises as fs } from "node:fs";

const filename = process.env.FILENAME;

if (!filename) {
  console.error("FILENAME is not set in .env");
  process.exit(1);
}

const content = "Hello from Node.js & dotenv!";

try {
  // запись файла
  await fs.writeFile(filename, content, "utf8");
  console.log(`File "${filename}" created and written.`);

  // чтение файла
  const data = await fs.readFile(filename, "utf8");
  console.log("File content:", data);
} catch (err) {
  console.error("error:", err.message);
}
