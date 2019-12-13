
exports.seed = function( knex ) {
  return knex( 'recipe_steps' ).insert( [
    { recipe_id: 1, ingredient_id: null, step_number: 1, step_instructions: 'Heat pan over medium heat'                 },
    { recipe_id: 1, ingredient_id:    2, step_number: 2, step_instructions: 'Melt butter in pan'                        },
    { recipe_id: 1, ingredient_id:    1, step_number: 3, step_instructions: 'crack eggs into pan'                       },
    { recipe_id: 1, ingredient_id: null, step_number: 4, step_instructions: 'Heat eggs until the whites turn white'     },
    { recipe_id: 1, ingredient_id: null, step_number: 5, step_instructions: 'Flip eggs and cook until desired firmness' },
    { recipe_id: 1, ingredient_id: null, step_number: 6, step_instructions: 'Salt n pepper to tase, and enjoy!'         }
  ] );
};
