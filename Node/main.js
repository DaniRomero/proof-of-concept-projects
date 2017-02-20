var mod = require("./module.js");

var request = mod ({
	type:'foobar'
});

request.method({
	x: 10,
    y: 20
});