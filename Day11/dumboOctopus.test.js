import assert from 'assert';
import { dumboOctopus } from './dumboOctopus.js';
import { testInput, realInput } from './input.js';

describe('Day 11: Dumbo Octopus', function () {
  describe('Part 1', function () {
    it('should return the total flashes after 100 steps', async function () {
      assert.equal(dumboOctopus(true, testInput, 100), 1656);
    });
    it('should return the total flashes after 100 steps with real input', async function () {
      console.log('Answer: ', dumboOctopus(true, realInput, 100));
    });
  });

  describe('Part 2', function () {
    it('should return the step at which all octopi flash', async function () {
      assert.equal(dumboOctopus(false, testInput), 195);
    });
    it('should return the step at which all octopi flash with real input', async function () {
      console.log('Answer: ', dumboOctopus(false, realInput));
    });
  });
});
