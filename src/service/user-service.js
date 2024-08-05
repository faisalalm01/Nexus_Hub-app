import User from "../model/user-model.js";
import { ResponseError } from "../utils/response-error.js";
const getDetailUser = async (email) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new ResponseError(404, "User Not Found");
  }
  return user;
};

export default { getDetailUser };
