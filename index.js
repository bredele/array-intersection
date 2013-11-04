var index = require('indexof');


/**
 * Concat all the values into an array.
 * @param  {Array} arr 
 * @return {[type]}
 * @api private
 */

function concat(arr){
	var result = [];
	for(var l = arr.length; l--;) {
		result = result.concat(arr[l]);
	}
	return result;
}


/**
 * Creates an array of unique values present in all provided arrays
 * the passed values.
 * 
 * @param {Array} arr 
 * @return {Array} 
 * @api public
 */

module.exports = function(arr) {
	var args = concat([].slice.call(arguments, 1));
	var cache = [];
	for(var i = 0, l = arr.length; i < l ;i++) {
		var val = arr[i];
		if(!!~index(args, val) && !~index(cache, val)){
			cache.push(val);
		}
	}
	return cache;
};
