var fs = require( 'fs' );
var http = require( 'http' );

var file = fs.createReadStream( process.argv[3] );

http.createServer( function ( req, res ) {
    res.writeHead( 200, { 'Content-Type': 'text/plain' } );
    file.pipe(res);
}).listen( Number( process.argv[2] ) );
