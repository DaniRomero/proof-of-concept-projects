var mod = require("./module.js");

var request = mod ({
	type:'foobar'
});

console.log(request);
request.method({
	x: 10,
    y: 20
});