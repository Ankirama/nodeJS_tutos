var http = require( "http" );
var map = require( "through2-map" );

http.createServer( function( req, res ) {
    if ( req.method === "POST" ) {
	res.writeHead( 200, { 'Content-Type': 'text/plain' } );
	console.log( map( function( chunk ) {
	    return chunk.toString().toUpperCase();
	}));
    }
}).listen( Number( process.argv[2] ) );
