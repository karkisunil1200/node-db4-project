exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');

      tbl
        .string('recipe_name')
        .notNullable()
        .unique();
    })
    .createTable('instructions', tbl => {
      tbl.increments('instruction_id');
      tbl.integer('ingredients_quantity').notNullable();

      tbl
        .integer('ingredient_id')
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients');
      tbl
        .string('instruction_name')
        .notNullable()
        .unique();
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      tbl
        .string('ingredient_name')
        .notNullable()
        .unique();
    })

    .createTable('connection', tbl => {
      //   tbl.primary(['recipe_id', 'instruction_id', 'ingredient_id']);

      tbl
        .integer('recipe_id')
        .notNullable()
        .references('recipe_id')
        .inTable('recipes');

      tbl
        .integer('instruction_id')
        .notNullable()
        .references('instruction_id')
        .inTable('instructions');

      tbl
        .integer('ingredient_id')
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('connection')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes');
};
