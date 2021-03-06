exports.up = function(knex, Promise) {
  return knex.schema.createTable('alerts', function(table) {
    table.increments();
    table.string('alert_name').notNullable();
    table.string('alert_description', 1000).notNullable();
    table.string('alert_safety_tips', 1000).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('alerts');
};
