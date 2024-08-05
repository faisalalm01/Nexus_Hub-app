import User from "../model/user-model.js";
import { ResponseError } from "../utils/response-error.js";
import {
  loginValidation,
  registerValidation,
} from "../validation/auth-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
const register = async (request) => {
  const userData = validate(registerValidation, request);
  const countUser = await User.findOne({ email: userData.email });
  if (countUser) {
    throw new ResponseError(409, "Email Already Registered");
  }
  userData.password = await bcrypt.hash(userData.password, 10);
  const user = new User(userData);
  await user.save();
  return user;
};
const login = async (request) => {
  const loginData = validate(loginValidation, request);
  const user = await User.findOne({ email: loginData.email });
  if (!user) {
    throw new ResponseError(401, "Email or Password Wrong");
  }
  const isPasswwordValid = await bcrypt.compare(
    loginData.password,
    user.password
  );
  if (!isPasswwordValid) {
    throw new ResponseError(401, "Email or Password Wrong");
  }
  const payload = {
    userId: user.id,
    fullname: user.fullname,
    email: user.email,
  };
  const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  return access_token;
};

export default {
  register,
  login,
};
