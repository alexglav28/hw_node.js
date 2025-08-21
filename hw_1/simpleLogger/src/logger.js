import fs from "fs";

export function logMessage(message) {
  const timestamp = new Date().toISOString();
  fs.appendFile("log.txt", `${timestamp} - ${message}\n`, (err) => {
    if (err) {
      console.error("Ошибка при записи лога:", err);
    } else {
      console.log("Лог записан!");
    }
  });
}