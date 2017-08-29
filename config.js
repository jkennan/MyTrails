const env = process.env;

// const nodeEnv = env.NODE_ENV || 'development';

const configInfo =  {
  mongodbUri: 'mongodb://localhost:27017/trails',
  port: env.PORT || 3000,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};

module.exports = configInfo;