function foo() {
    var bar;
    quux = 42;
    function zip() {
	var quux = 24;
	bar = true;
    }
    return zip;
}
