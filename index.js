var filter = require('filter');
var index = require('indexof');


/**
 * Creates an array of unique values present in all provided arrays
 * the passed values.
 * 
 * @param {Array} arr 
 * @return {Array} 
 * @api public
 */

module.exports = function(arr) {
	var args = [].slice.call(arguments, 1);
	var ex = [];
	for(var l = args.length; l--;) {
		ex = ex.concat(args[l]);
	}
	return filter(arr, function(val){
		return !!~index(ex, val);
	});
};
