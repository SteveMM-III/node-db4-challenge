const db = require( '../data/db-config' );

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient
};

function getRecipes() {
  return db( 'recipes' );
}

function getShoppingList( recipe_id ) {
  return db( 'recipe_ingredients as ri'                     )
    .select( 'i.name', 'ri.quantity'                        )
    .join  ( 'ingredients as i', 'ri.ingredient_id', 'i.id' )
    .where ( 'ri.recipe_id', recipe_id                      );
}

function getInstructions( recipe_id ) {
  return db  ( 'recipe_steps as rs'                                             )
    .select  ( 'i.name as ingredient', 'rs.step_number', 'rs.step_instructions' )
    .leftJoin( 'ingredients as i', 'rs.ingredient_id', 'i.id'                   )
    .where   ( 'rs.recipe_id', recipe_id                                        )
    .orderBy ( 'rs.step_number'                                                 );
}

function getRecipesByIngredient( ingredient_id ) {

}
