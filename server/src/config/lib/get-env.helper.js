import { config } from 'dotenv';

function getENV() {
  config({ path: './.env' });
  return {
    DB: {
      PORT: process.env.DATABASE_PORT,
      HOST: process.env.DATABASE_HOST,
      DATABASE: process.env.DATABASE_NAME,
      USER: process.env.DATABASE_USER,
      PASSWORD: process.env.DATABASE_ACCESS_KEY,
      NODE_ENV: process.env.NODE_ENV,
      CONNECTION_STRING: process.env.CONNECTION_STRING,
    },
  };
}

export { getENV };
