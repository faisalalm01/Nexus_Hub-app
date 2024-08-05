import Message from "../model/message-model.js";
import User from "../model/user-model.js";
import { ResponseError } from "../utils/response-error.js";
import { sendMessageValidation } from "../validation/message-validation.js";
import { validate } from "../validation/validation.js";
import { getSocketIO } from "../application/socket.js";

const sendMessage = async (request, userId) => {
  const validatedData = validate(sendMessageValidation, request);
  const user = await User.findById(userId);
  if (!user) {
    throw new ResponseError(404, "User not found");
  }

  const message = new Message({
    messageContent: validatedData.message,
    userId: userId,
  });

  await message.save();

  const io = getSocketIO();
  io.emit("message", {
    content: message.content,
    userId: message.userId,
    createdAt: message.createdAt,
  });
  return message;
};
export default { sendMessage };
