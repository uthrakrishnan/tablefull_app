
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (t)=>{
    t.increments(),
    t.integer('venue_id').unsigned().index().references('venues.id').notNullable().onDelete('cascade'),
    t.date('date'),
    t.text('event_name'),
    t.text('event_img'),
    t.text('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
