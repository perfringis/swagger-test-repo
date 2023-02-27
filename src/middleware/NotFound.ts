import { RequestHandler } from 'express';
import createError from 'http-errors';

const notFound: RequestHandler = (req, res, next): void => {
  next(createError(404, 'Not Found'));
};

export default notFound;
