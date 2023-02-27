import { ErrorRequestHandler } from 'express';

const serverError: ErrorRequestHandler = (err, req, res) => {
  return res.status(500).json({
    message: process.env.NODE_ENV === 'prod' ? 'unknown error' : `${err}`,
  });
};

export default serverError;
