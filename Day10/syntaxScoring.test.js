import assert from 'assert';
import { syntaxScoring } from './syntaxScoring.js';
import { testInput, realInput } from './input.js';

describe('Day 10: Syntax Scoring', function () {
  describe('Part 1', function () {
    it('should return the total syntax error score', async function () {
      assert.equal(syntaxScoring(testInput), 26397);
    });
    it('should return the total syntax error score with real input', async function () {
      console.log('Answer: ', syntaxScoring(realInput));
    });
  });
});
