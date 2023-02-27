import * as dotenv from 'dotenv';
import { resolve } from 'path';

const env = process.env.NODE_ENV || 'dev';
switch (env) {
  case 'dev':
    dotenv.config({ path: resolve('.env.dev') });
    break;
  case 'prod':
    dotenv.config({ path: resolve('.env') });
    break;
  default:
    dotenv.config({ path: resolve('.env.dev') });
}

import config from './config';
export default config;
