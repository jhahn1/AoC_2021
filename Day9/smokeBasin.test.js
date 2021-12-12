import assert from 'assert';
import { smokeBasinPart1, smokeBasinPart2 } from './smokeBasin.js';
import { testInput, realInput } from './input.js';

describe('Day 9: Smoke Basin', function () {
  describe('Part 1', function () {
    it('should return the sum of the risk levels of low points on heightmap', async function () {
      assert.equal(smokeBasinPart1(testInput), 15);
    });
    it('should return the sum of the risk levels of low points on heightmap with real input', async function () {
      console.log('Answer: ', smokeBasinPart1(realInput));
    });
  });

  describe('Part 2', function () {
    it('should return the product of the three largest basins', async function () {
      assert.equal(smokeBasinPart2(testInput), 1134);
    });
    it('should return the product of the three largest basins with real input', async function () {
      console.log('Answer: ', smokeBasinPart2(realInput));
    });
  });
});
