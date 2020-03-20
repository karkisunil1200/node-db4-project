exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          instruction_id: 1,
          ingredient_id: 1,
          instruction_name:
            'Get some water, Second: put it and put it on a pan then fire up the stove',
          ingredients_quantity: 2
        },
        {
          instruction_id: 2,
          ingredient_id: 2,
          instruction_name:
            'Get some rice and put that rice in a ricecooker and pour some water in there and let it do the magic',
          ingredients_quantity: 3
        },
        {
          instruction_id: 3,
          ingredient_id: 3,

          instruction_name: 'Get some milk and get add suger then add tea leaf',
          ingredients_quantity: 2
        }
      ]);
    });
};
