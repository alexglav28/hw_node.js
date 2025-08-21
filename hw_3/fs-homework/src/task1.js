import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const dirPath = path.join(__dirname, 'myFolder');

//создаём каталог

fs.mkdir(dirPath, (err) => {
  if (err && err.code !== "EEXIST") {
    console.error("Ошибка создания каталога:", err);
    return;
  }
  console.log(
    err?.code === "EEXIST"
      ? "Каталог уже существует:"
      : "Каталог создан:",
    dirPath
  );

  //  удаляем каталог
  
  fs.rmdir(dirPath, (rmErr) => {
    if (rmErr) {
      console.error("Ошибка удаления каталога:", rmErr);
      return;
    }
    console.log("Каталог удалён:", dirPath);
  });
});