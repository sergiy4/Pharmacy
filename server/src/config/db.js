import { getENV } from './lib/helpers.js';

function initialConfig() {
  const {
    DATABASE: database,
    HOST: host,
    PASSWORD: password,
    PORT: port,
    USER: user,
    NODE_ENV: env,
    CONNECTION_STRING: connection_string,
  } = getENV().DB;

  const connection =
    env === 'production'
      ? connection_string
      : {
          port,
          host,
          database,
          user,
          password,
        };

  return {
    development: {
      client: 'postgresql',
      connection,
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        directory: './src/db/migrations',
        tableName: 'knex_migrations',
      },
      seeds: {
        directory: './src/db/seeds',
      },
    },
  };
}

function environmentsConfig() {
  return {
    ['development']: initialConfig,
    ['production']: initialConfig,
  };
}

export { environmentsConfig };
