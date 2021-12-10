import assert from 'assert';
import { sevenSegmentSearch } from './sevenSegmentSearch.js';
import { testInput, realInput } from './input.js';

describe('Day 8: Seven Segment Search', function () {
  describe('Part 1', function () {
    it('should return the number of times 1, 4, 7 and 8 appear', async function () {
      assert.equal(sevenSegmentSearch(testInput), 26);
    });
    it('should return the number of times 1, 4, 7 and 8 appear with real input', async function () {
      console.log('Answer: ', sevenSegmentSearch(realInput));
    });
  });
});
