import assert from 'assert';
import { testInput, realInput } from './input.js';
import { giantSquid } from './giantSquid.js';

describe('Day 4: Giant Squid', function () {
  describe('Part 1', function () {
    it('should return the final score of the winning bingo board', async function () {
      assert.equal(giantSquid(testInput, false), 4512);
    });

    it('should return the final score of the winning bingo board with real input', async function () {
      console.log('Answer: ', giantSquid(realInput, false));
    });
  });

  describe('Part 2', function () {
    it('should return the final score of the last winning bingo board', async function () {
      assert.equal(giantSquid(testInput, true), 1924);
    });

    it('should return the final score of the winning bingo board with real input', async function () {
      console.log('Answer: ', giantSquid(realInput, true));
    });
  });
});
