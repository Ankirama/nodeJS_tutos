var through2 = require( 'through2' );
var split = require( 'split' );

var nb_even = false;

process.stdin
    .pipe(split())
    .pipe(through2(function(buf, _, next) {
	if (nb_even)
	    this.push(buf.toString().toUpperCase() + "\n");
	else
	    this.push(buf.toString().toLowerCase() + "\n");
	nb_even = !nb_even;
    next();
})).pipe(process.stdout);
