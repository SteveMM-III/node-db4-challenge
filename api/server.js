const express = require( 'express' );
const helmet  = require( 'helmet' );

const db = require( '../data/db-model' );

const server = express();

server.use( helmet()       );
server.use( express.json() );

server.get( '/api/recipes', ( req, res ) => {
  db.getRecipes()
    .then ( recipes => { res.status( 200 ).json( recipes ); } )
    .catch( error   => {
      console.log( error );
      res.status ( 500   ).json( { error: 'Failed to get recipes' } );
    } );
} );

server.get( '/api/recipes/:id/shoppingList', ( req, res ) => {
  db.getShoppingList( req.params.id )
    .then ( list  => { res.status( 200 ).json( list ); } )
    .catch( error => {
      console.log( error );
      res.status ( 500   ).json( { error: 'Faild to get shopping list' } );
    } );
} );

server.get( '/api/recipes/:id/instructions', ( req, res ) => {
  db.getInstructions( req.params.id )
    .then ( instructions => { res.status( 200 ).json( instructions ); } )
    .catch( error        => {
      console.log( error );
      res.status ( 500   ).json( { error: 'Failed to get instructions' } );
    } );
} );

server.get( '/api/ingredients/:id/recipes', ( req, res ) => {

} );

module.exports = server;
