import assert from 'assert';
import {
  sevenSegmentSearchPart1,
  sevenSegmentSearchPart2,
} from './sevenSegmentSearch.js';
import { testInput, testInputPart2, realInput } from './input.js';

describe('Day 8: Seven Segment Search', function () {
  describe('Part 1', function () {
    it('should return the number of times 1, 4, 7 and 8 appear', async function () {
      assert.equal(sevenSegmentSearchPart1(testInput), 26);
    });
    it('should return the number of times 1, 4, 7 and 8 appear with real input', async function () {
      console.log('Answer: ', sevenSegmentSearchPart1(realInput));
    });
  });

  describe('Part 2', function () {
    it('should return the sum of all output values', async function () {
      assert.equal(sevenSegmentSearchPart2(testInputPart2), 5353);
    });

    it('should return the sum of all output values', async function () {
      assert.equal(sevenSegmentSearchPart2(testInput), 61229);
    });
    it('should return the sum of all output values with real input', async function () {
      console.log('Answer: ', sevenSegmentSearchPart2(realInput));
    });
  });
});
