export const notFoundMiddleware = (req, res, next) => {
  res
    .status(404)
    .json({
      error_message: "Request Not Found",
      status_code: 404,
    })
    .end();
};
