
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t)=>{
    t.increments();
    t.text('username');
    t.text('displayName');
    t.text('profile_pic');
    t.text('intro');
    t.text('fb_id');
    t.text('email');
    t.integer('zipcode')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
