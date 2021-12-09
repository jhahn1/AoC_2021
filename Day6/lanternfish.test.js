import assert from 'assert';
import { lanternfishPart1, lanternfishPart2 } from './lanternfish.js';
import { testInput } from './input.js';

describe('Day 6: Lanternfish', function () {
  describe('Part 1', function () {
    it('should return the number lanternfish after 80 days', async function () {
      const input = '3,4,3,1,2';
      assert.equal(lanternfishPart2(input, 80), 5934);
    });

    it('should return the number lanternfish after 80 days with real input', async function () {
      //Answer:  349549
      console.log('Answer: ', lanternfishPart2(testInput, 80));
    });

    it('should return the number lanternfish after 80 days with real input', async function () {
      //Answer:  10396
      console.log('Answer: ', lanternfishPart1(testInput, 40));
    });

    it('should return the number lanternfish after 80 days with real input', async function () {
      //Answer:  1994508
      console.log('Answer: ', lanternfishPart2(testInput, 100));
    });
  });

  describe('Part 2', function () {
    it.skip('should return the number lanternfish after 18 days with exponential growth rate calculation', async function () {
      assert.equal(lanternfishPart2('3,4,3,1,2', 26984457539, 256, 18), 26);
    });

    it.skip('should return the number lanternfish after 80 days with exponential growth rate calculation', async function () {
      assert.equal(lanternfishPart2(testInput, 1994508, 100, 80), 349549);
    });

    it.only('should return the number lanternfish after 256 days with real input', async function () {
      console.log('Answer: ', lanternfishPart2(testInput, 256));
    });
  });
});
