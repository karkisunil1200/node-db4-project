exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('connection')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('connection').insert([
        {instruction_id: 1, ingredient_id: 1, recipe_id: 1},
        {instruction_id: 2, ingredient_id: 2, recipe_id: 2},
        {instruction_id: 3, ingredient_id: 3, recipe_id: 3}
      ]);
    });
};
