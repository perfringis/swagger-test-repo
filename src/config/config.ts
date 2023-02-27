export default {
  app: {
    host: process.env.HOST,
    port: process.env.PORT,
  },
  swagger: {
    host: process.env.INGRESS_HOST,
    protocols: process.env.PROTOCOLS,
  },
};
