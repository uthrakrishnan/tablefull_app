module.exports = {
  
  development: {
    client: 'pg',
    connection: {
      database: 'tablefull_app'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'tablefull_app',
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