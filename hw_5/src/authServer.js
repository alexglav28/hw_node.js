import { createServer } from "node:http";

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/favicon.ico") {
    res.statusCode = 204; 
    return res.end();
  }

  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  const authHeader = req.headers["authorization"]; 

  if (!authHeader) {
    res.statusCode = 401;
    return res.end("Unauthorized");
  }

  res.statusCode = 200;
  res.end("Authorization header received");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
