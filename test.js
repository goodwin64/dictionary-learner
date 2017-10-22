const assert = require('assert');
const check = require('./src/index.js');

const words1 = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

it('should return correct rotation index for words1', () => {
  assert.equal(findRotationPoint(words1), 5);
});
