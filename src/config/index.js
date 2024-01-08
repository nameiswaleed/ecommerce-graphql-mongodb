const dotenv = require('dotenv');
const joi = require('joi');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../../.env') });
const envVarsSchema = joi
  .object()
  .keys({
    NODE_ENV: joi.string().valid('production', 'development', 'test').required(),
    MONGO_URI: joi.string().required(),
    DB_NAME: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    JWT_EXPIRATION: joi.string().required(),
    PORT: joi.number().positive().required(),
  })
  .unknown();
const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoUri: envVars.MONGO_URI,
  dbName: envVars.DB_NAME,
  jwtSecret: envVars.JWT_SECRET,
  jwtExpirationInterval: envVars.JWT_EXPIRATION,
};
