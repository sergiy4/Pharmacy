import { getENV } from './lib/helpers.js';

function initialConfig() {
  const {
    DATABASE: database,
    HOST: host,
    PASSWORD: password,
    PORT: port,
    USER: user,
  } = getENV().DB;

  return {
    development: {
      client: 'postgresql',
      connection: {
        port,
        host,
        database,
        user,
        password,
      },
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
