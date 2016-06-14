
exports.up = function(knex, Promise) {
  return knex.schema.createTable('calendar', (t)=>{
    t.increments(),
    t.date('date')
    t.integer('venue_id').unsigned().index().references('venues.id').notNullable().onDelete('cascade'),
    t.integer('table_id').unsigned().index().references('tables.id').notNullable().onDelete('cascade'),
    t.integer('cost'),
    t.text('status'),
    t.integer('user_id').unsigned().index().references('users.id').onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  
};
