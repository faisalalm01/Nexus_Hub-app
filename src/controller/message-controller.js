import messageService from "../service/message-service.js";
export const sendMessageController = async (req, res, next) => {
  try {
    const message = await messageService.sendMessage(req.body, req.user.userId);
    return res.status(201).json({
      message: "Message sent successfully",
      data: message,
      status_code: 201,
    });
  } catch (error) {
    next(error);
  }
};
