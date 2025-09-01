import { createServer } from "node:http";
import { appendFile } from "node:fs/promises";

async function logError(err, req) {
  const line =
    `[${new Date().toISOString()}] ${req.method} ${req.url} ` +
    `- ${err.name}: ${err.message}\n`;
  await appendFile("errors.log", line, "utf8");
}

const server = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/favicon.ico") {
    res.statusCode = 204;
    return res.end();
  }

  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  try {
    // Искусственная ошибка 
    throw new Error("Test error for logging");
  } catch (err) {
    await logError(err, req);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
