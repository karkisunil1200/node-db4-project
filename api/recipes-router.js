const express = require('express');
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to get the recipes', error: err.message});
    });
});

router.get('/ingredients/:id', (req, res) => {
  const id = req.params.id;
  Recipes.getShoppingList(id)
    .then(list => {
      res.status(200).json(list);
    })
    .catch(error => {
      res.status(500).json({message: 'Failed to get the recipes', error: error.message});
    });
});

router.get('/instructions/:id', (req, res) => {
  const id = req.params.id;
  Recipes.getInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions);
    })
    .catch(error => {
      res.status(500).json({message: 'Failed to get the instructions'});
    });
});

module.exports = router;
