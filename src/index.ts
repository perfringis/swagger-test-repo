import app from './app';
import config from './config';

const HOST = config.app.host || '0.0.0.0';
const PORT = config.app.port || 8081;

app.listen(
  {
    port: PORT,
    host: HOST,
  },
  () => {
    console.log(`[APP] Server is running at http://${HOST}:${PORT}`);
  },
);
