import assert from 'assert';
import { hydrothermalVenture } from './hydrothermalVenture.js';
import { testInput, realInput } from './input.js';

describe('Day 5: Hydrothermal Venture', function () {
  describe('Part 1', function () {
    it('should return the number of point in which two lines overlap', async function () {
      assert.equal(hydrothermalVenture(testInput, false), 5);
    });

    it('should return the number of point in which two lines overlap with real input', async function () {
      console.log('Answer: ', hydrothermalVenture(realInput, false));
    });
  });

  describe.only('Part 2', function () {
    it('should return the number of point in which two lines overlap', async function () {
      assert.equal(hydrothermalVenture(testInput, true), 12);
    });

    it('should return the number of point in which two lines overlap with real input', async function () {
      console.log('Answer: ', hydrothermalVenture(realInput, true));
    });
  });
});
