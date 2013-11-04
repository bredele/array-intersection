var intersection = require('intersection');
var assert = require('assert');




describe('intersection', function(){
  it('creates an array of unique values present in all provided arrays', function(){
    var result = intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
    assert(result[0] === 1);
    assert(result[1] === 2);
    assert(result.length === 2);
  });

});
