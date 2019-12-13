
exports.seed = function(knex) {
      return knex( 'ingredients' ).insert( [
        { name: 'eggs'   },
        { name: 'butter' }
      ] );
};
