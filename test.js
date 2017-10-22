const assert = require('assert');
const findRotationPoint = require('./src/index.js');

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
    'othellolagkage'
];

const words2 = ['gobbledygook'];

const words3 = [
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage'
];

const words4 = [
    'othellolagkage',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage'
];

it('should return correct rotation index for words1', () => {
  assert.equal(findRotationPoint(words1), 5);
});

it('should return 0 when you collect only one work in your dictionary', () => {
  assert.equal(findRotationPoint(words2), 0);
});

it('should return correct rotation index for words3', () => {
  assert.equal(findRotationPoint(words3), 0);
});

it('should return correct rotation index for words4', () => {
  assert.equal(findRotationPoint(words4), 1);
});
