
exports.up = function(knex) {
  return knex.schema.createTable( 'recipes', tbl => {
    tbl
      .increments();
    tbl
      .string( 'name', 255 )
      .notNullable()
      .unique();
    tbl
      .string( 'description', 255 );
  } )
  .createTable( 'ingredients', tbl => {
    tbl
      .increments();
    tbl
      .string( 'name', 255 )
      .notNullable()
      .unique();
  } )
  .createTable( 'recipe_ingredients', tbl => {
    tbl
      .primary( [ 'recipe_id', 'ingredient_id' ] );
    tbl
      .integer( 'recipe_id' )
      .unsigned()
      .notNullable()
      .references( 'id' )
      .inTable( 'recipes' );
    tbl
      .integer( 'ingredient_id' )
      .unsigned()
      .notNullable()
      .references( 'id' )
      .inTable( 'ingredients' );
    tbl
      .string( 'quantity', 255 )
      .notNullable();
  } )
  .createTable( 'recipe_steps', tbl => {
    tbl
      .increments();
    tbl
      .integer( 'recipe_id' )
      .unsigned()
      .notNullable()
      .references( 'id' )
      .inTable( 'recipes' );
    tbl
      .integer( 'ingredient_id' )
      .unsigned()
      .references( 'id' )
      .inTable( 'recipe_ingredients' );
    tbl
      .integer( 'step_number' )
      .notNullable();
    tbl
      .string( 'step_instructions', 255 )
      .notNullable();
  } );
};

exports.down = function(knex) {
  
};
