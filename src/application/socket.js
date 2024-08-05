import { Server } from "socket.io";

let io;

export function initializeSocket(httpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("message", (data) => {
      console.log("Message received:", data);
      io.emit("message", data);
    });

    socket.on("offer", (offer) => {
      socket.broadcast.emit("offer", offer);
    });

    socket.on("answer", (answer) => {
      socket.broadcast.emit("answer", answer);
    });

    socket.on("ice-candidate", (candidate) => {
      socket.broadcast.emit("ice-candidate", candidate);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
}

export function getSocketIO() {
  if (!io) {
    throw new Error("Socket.IO server is not initialized");
  }
  return io;
}
