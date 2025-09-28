import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

// Статика из public
app.use(express.static("public"));

// Создаем HTTP-сервер поверх Express
const httpServer = createServer(app);

// Настраиваем Socket.io
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });

  // обработка входящих сообщений
  socket.on("chat message", (msg) => {
    console.log("Message from client:", msg);

    // подтверждение обратно клиенту
    socket.emit("chat message", `Server received: ${msg}`);
  });
});

export { httpServer };
