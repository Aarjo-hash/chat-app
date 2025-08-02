const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const Message = require("./models/messageModel"); // ✅ import the message model
const socket = require("socket.io");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

// ✅ Health check route
app.get("/ping", (_req, res) => {
  return res.json({ msg: "Ping Successful" });
});

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ Start server
const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

// ✅ Initialize Socket.io
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

// ✅ Socket handling
io.on("connection", (socket) => {
  global.chatSocket = socket;

  // Add user to map
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  // ✅ Handle sending message
  socket.on("send-msg", async (data) => {
    try {
      const { from, to, msg } = data;

      // Save message to MongoDB
      await Message.create({
        message: { text: msg },
        users: [from, to],
        sender: from,
      });

      // Emit to recipient if online
      const sendUserSocket = onlineUsers.get(to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", msg);
      }
    } catch (err) {
      console.error("Error in send-msg:", err.message);
    }
  });
});

