import { prismaClient } from "../application/database.js";
import { ResponseError } from "../utils/response-error.js";
const get = async (email) => {
  const user = await prismaClient.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      fullname: true,
      email: true,
    },
  });
  if (!user) {
    throw new ResponseError(404, "User Not Found");
  }
  return user;
};

export default { get };
