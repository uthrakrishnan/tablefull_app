module.exports = {
  
  development: {
    client: 'pg',
    connection: {
      database: 'tableful_app'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'tableful_app',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};