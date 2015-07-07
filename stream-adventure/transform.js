var tr = require( 'through2' );

process.stdin.pipe(tr(function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
})).pipe(process.stdout);
