function notFoundHandler(req, res, next) {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
}

function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  console.error(err);
  res.status(status).json({
    success: false,
    message: status === 500 ? "Internal server error" : err.message,
  });
}

export { notFoundHandler, errorHandler };
