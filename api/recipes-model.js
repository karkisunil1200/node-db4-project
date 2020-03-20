const db = require('../dbConfig');

//getRecipes(): should return a list of all recipes in the database.
//getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
//getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(ingredient_id) {
  return db('ingredients')
    .select('ingredients.ingredient_name', 'instructions.ingredients_quantity')
    .join('instructions', 'ingredients.ingredient_id', 'instructions.ingredient_id')
    .where('ingredients.ingredient_id', `${ingredient_id}`);
}

function getInstructions(id) {
  return db('instructions')
    .where({instruction_id: id})
    .first();
}
