import { join } from 'path';
import fs from 'fs';

import { Router } from 'express';
import { Server } from 'typescript-rest';

import config from '../config';

const getSwaggerHost = (): string => {
  return config.swagger.host || '';
};

const getSwaggerProtocols = (defaultValue?: string): string[] => {
  const swaggerProtocols: string | undefined = config.swagger.protocols || '';

  if (swaggerProtocols) {
    return swaggerProtocols.split(',').map((v) => v.trim());
  }

  return defaultValue ? [defaultValue] : [];
};

const addSwagger = (router: Router): void => {
  const swaggerPath = join(process.cwd(), 'dist/swagger.json');

  if (fs.existsSync(swaggerPath)) {
    Server.swagger(router, {
      filePath: swaggerPath,
      schemes: [],
      host: '',
      endpoint: '/api-docs',
    });
  }
};

export default addSwagger;
