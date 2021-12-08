import assert from 'assert';
import { lanternfish } from './lanternfish.js';
import { input } from './input.js';

describe('Day 6: Lanternfish', function () {
  describe('Part 1', function () {
    it('should return the number lanternfish after 80 days', async function () {
      const input = '3,4,3,1,2';
      assert.equal(lanternfish(input), 5934);
    });

    it('should return the number lanternfish after 80 days with real input', async function () {
      console.log('Answer: ', lanternfish(input));
    });
  });
});
