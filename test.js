const assert = require('assert');
const operations = require('./operations');

it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(operations.add(1,3),4);
});

it('correctly calculates 2 minus 5', () => {
    assert.equal(operations.subtract(3,5),2);
});

it('correctly multiplies 4 and 6', () => {
    assert.equal(operations.multiply(4,6),24);
});

it('correctly divides 36 by 3', () => {
    assert.equal(operations.divide(36,3),12);
});