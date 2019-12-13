
exports.seed = function(knex) {
  return knex( 'recipes' ).insert( [
    { name: 'Fried_Egg', description: 'Fried egg' }
  ] );
};
