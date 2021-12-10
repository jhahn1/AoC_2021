import assert from 'assert';
import {
  treacheryOfWhalesPart1,
  treacheryOfWhalesPart2,
} from './treacheryOfWhales.js';
import { realInput } from './input.js';

describe('Day 7: Treachery of Whales', function () {
  describe('Part 1', function () {
    it('should return the amount of fuel for crabs to get horizontally aligned', async function () {
      const input = '16, 1, 2, 0, 4, 2, 7, 1, 2, 14';
      assert.equal(treacheryOfWhalesPart1(input), 37);
    });
    it('should return the amount of fuel for crabs to get horizontally aligned with real input', async function () {
      console.log('Answer: ', treacheryOfWhalesPart1(realInput));
    });
  });

  describe('Part 2', function () {
    it('should return the amount of fuel for crabs to get horizontally aligned', async function () {
      const input = '16, 1, 2, 0, 4, 2, 7, 1, 2, 14';
      assert.equal(treacheryOfWhalesPart2(input), 168);
    });
    it('should return the amount of fuel for crabs to get horizontally aligned with real input', async function () {
      console.log('Answer: ', treacheryOfWhalesPart2(realInput));
    });
  });
});
