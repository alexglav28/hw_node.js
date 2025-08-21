import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "info.txt");
const content = "Node.js is awesome!";

// записываем файл
fs.writeFile(filePath, content, "utf8", (wErr) => {
  if (wErr) {
    console.error("Ошибка записи:", wErr);
    return;
  }
  console.log("Успешно записали в:", filePath);

  // читаем файл
  fs.readFile(filePath, "utf8", (rErr, data) => {
    if (rErr) {
      console.error("Ошибка чтения:", rErr);
      return;
    }
    console.log("Содержимое файла:", data);
  });
});
