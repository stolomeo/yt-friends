const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET, POST"],
  },
});

io.on("connection", (socket: any) => {
  console.log(`User conntected: ${socket.id}`);
  socket.on("send_message", (data: any) => {
    socket.broadcast.emit("receieve_message", data);
  });
});

server.listen(3001, () => {
  console.log("Listening...");
});
