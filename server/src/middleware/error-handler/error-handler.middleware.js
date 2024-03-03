function errorHandler(err, _req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  const { message, statusCode: status = 500 } = err;
  return res.status(status).send({ status, error: message });
}

export { errorHandler };
