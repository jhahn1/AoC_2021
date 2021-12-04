import assert from 'assert';
import { binaryDiagnosticPart1 } from './binaryDiagnostic.js';
import { input as realInput } from './input.js';

describe('Day 3: Binary Diagnostic', function () {
  describe('Part 1', function () {
    it('should return the power consumption of the submarine ', async function () {
      const input = `00100
      11110
      10110
      10111
      10101
      01111
      00111
      11100
      10000
      11001
      00010
      01010`;
      assert.equal(binaryDiagnosticPart1(input), 198);
    });

    it('should return the power consumption of the submarine with real input', async function () {
      console.log('Answer: ', binaryDiagnosticPart1(realInput));
    });
  });
});
