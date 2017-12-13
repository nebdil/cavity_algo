let cavity = require('../index.js');
let assert = require('assert');

describe('area', function() {
  it('should return 3', function() {
    assert.equal(3, cavity.area([4, 6, 4, 3, 5, 2]));
  });
  it('should return 11', function() {
    assert.equal(11, cavity.area([5, 6, 7, 2, 1, 8, 5]));
  });
});
