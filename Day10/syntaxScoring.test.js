import assert from 'assert';
import { syntaxScoringPart1, syntaxScoringPart2 } from './syntaxScoring.js';
import { testInput, realInput } from './input.js';

describe('Day 10: Syntax Scoring', function () {
  describe('Part 1', function () {
    it('should return the total syntax error score', async function () {
      assert.equal(syntaxScoringPart1(testInput), 26397);
    });
    it('should return the total syntax error score with real input', async function () {
      console.log('Answer: ', syntaxScoringPart1(realInput));
    });
  });

  describe('Part 2', function () {
    it('should return the middle syntax error score', async function () {
      assert.equal(syntaxScoringPart2(testInput), 288957);
    });
    it('should return the middle syntax error score with real input', async function () {
      console.log('Answer: ', syntaxScoringPart2(realInput));
    });
  });
});
