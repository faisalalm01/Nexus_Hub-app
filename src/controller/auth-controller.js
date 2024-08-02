import authService from "../service/auth-service.js";
export const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    return res.status(201).json({
      message: "Register Successfully",
      data: result,
      status_code: 201,
    });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    return res.status(200).json({
      message: "Login Successfully",
      access_token: result.token,
      status_code: 200,
    });
  } catch (error) {
    next(error);
  }
};

export default { register, login };
