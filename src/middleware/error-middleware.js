import { ResponseError } from "../utils/response-error.js";
export const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }
  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        error_message: err.message,
        status_code: err.status,
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        error_message: err.message,
        status_code: err.status,
      })
      .end();
  }
};
