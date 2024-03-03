import { getENV } from './lib/env.enum.js';

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
        tableName: 'knex_migrations',
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
