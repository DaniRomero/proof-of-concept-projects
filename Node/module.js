module.exports = function(options) {
	var limit = 100;
	if (options.type === 'foobar')
		limit = 200;

	return {
		name: "request",
		limit: limit,
		type: options.type,
		method: function(data){return data;}
	};
}