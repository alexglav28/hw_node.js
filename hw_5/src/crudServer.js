import { createServer } from "node:http";

const server = createServer((req, res) => {
  // 1 favicon
  if (req.method === "GET" && req.url === "/favicon.ico") {
    res.statusCode = 204;
    return res.end();
  }

  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  // 2 GET 
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    return res.end("Сервер работает. Используй PUT или DELETE для проверки.");
  }

  // 3 PUT и DELETE
  if (req.method === "PUT") {
    res.statusCode = 200;
    return res.end("PUT-запрос обработан");
  }

  if (req.method === "DELETE") {
    res.statusCode = 200;
    return res.end("DELETE-запрос обработан");
  }

  res.statusCode = 405;
  res.end("Метод не разрешен");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
