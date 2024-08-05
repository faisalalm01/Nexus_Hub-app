import mongoose from "mongoose";

// Mendefinisikan skema User
const messageModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  messageContent: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Membuat model User berdasarkan skema
const Message = mongoose.model("messages", messageModel);

export default Message;
