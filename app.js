import { Server } from "socket.io";

const io = new Server(4000, { cors: { origin: "*" } });

io.on("connection", (socket) => {
   socket.on("send-message", (message) => {
      console.log("messagedddd", message);
      socket.broadcast.emit("receive-message", message);
   });
});
