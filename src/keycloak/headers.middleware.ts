import { NextFunction, Request, Response } from 'express';

/**
 * This allows client applications from other domains use the API Server
 *
 * You need to use functional middleware when using app.use();
 * https://github.com/nestjs/nest/issues/543#issuecomment-443548299
 */
export function headers(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, X-Requested-With, Content-Type, Accept, responsetype',
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
}
