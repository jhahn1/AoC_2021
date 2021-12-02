import { divePart1, divePart2 } from './dive.js';
import assert from 'assert';
import { input as realInput } from './input.js';

describe('Day 2: Dive', function () {
  describe('Part 1', function () {
    it('should return the product of the final horizontal position and depth ', async function () {
      const input = `forward 5
      down 5
      forward 8
      up 3
      down 8
      forward 2`;
      assert.equal(divePart1(input), 150);
    });

    it('should return the product of final horizontal position and depth with real input', async function () {
      console.log('Answer: ', divePart1(realInput));
    });
  });

  describe('Part 2', function () {
    it('should return the product of the final horizontal position and depth ', async function () {
      const input = `forward 5
        down 5
        forward 8
        up 3
        down 8
        forward 2`;
      assert.equal(divePart2(input), 900);
    });

    it('should return the product of final horizontal position and depth with real input', async function () {
      console.log('Answer: ', divePart2(realInput));
    });
  });
});
