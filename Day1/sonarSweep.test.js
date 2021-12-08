import assert from 'assert';
import { sonarSweepPart1, sonarSweepPart2 } from './sonarSweep.js';
import { input } from './input.js';

describe('Day 1: Sonar Sweep', function () {
  describe('Part 1', function () {
    it('should return the number of times the ocean depth increases', async function () {
      const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
      assert.equal(sonarSweepPart1(input), 7);
    });

    it('should return the number of times the ocean depth increases with real values', async function () {
      console.log('Answer: ', sonarSweepPart1(input()));
    });
  });

  describe('Part 2', function () {
    it('should return the number of times the ocean depth increases', async function () {
      const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
      assert.equal(sonarSweepPart2(input), 5);
    });

    it('should return the number of times the ocean depth increases with real values', async function () {
      console.log('Answer: ', sonarSweepPart2(input()));
    });
  });
});
