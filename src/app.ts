import { join } from 'path';

import express, { Application, Router } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import { Server } from 'typescript-rest';

import addSwagger from './middleware/Swagger';

// import Controllers from './controllers';

const app: Application = express();

// public directory
app.use(express.static(join(process.cwd(), 'public'), { maxAge: 31557600000 }));

// applications
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);

// router
const router: Router = Router();
// initial try
Server.loadServices(router, 'controllers/*', __dirname);
// second try
// Server.buildServices(router, ...Controllers);

// swagger
addSwagger(router);

app.use(router);

export default app;
