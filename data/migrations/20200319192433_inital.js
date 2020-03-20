
exports.up = async function(knex) {
  await knex.schema.createTable('games', (table) => {
    table.increments('id');
    table.string('name').unique().notNullable();
    table.integer('rating').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('games')
};
