import userService from "../service/user-service.js";
export const getUser = async (req, res, next) => {
  try {
    const user = await userService.get(req.user.email);
    return res.status(200).json({
      message: "User Found",
      data: user,
      status_code: 200,
    });
  } catch (error) {
    next(error);
  }
};

export default { getUser };
