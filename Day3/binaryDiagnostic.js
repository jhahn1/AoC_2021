export const binaryDiagnosticPart1 = (input) => {
  let listLength = 0;
  const gammaRateString = input
    .split('\n')
    .reduce((acc, binary) => {
      listLength++;
      binary
        .trim()
        .split('')
        .map((i, index) => {
          acc[index] = i === '1' ? (acc[index] || 0) + 1 : acc[index];
        });
      return acc;
    }, [])
    .reduce((finalBinary, count) => {
      parseInt(count) > listLength / 2
        ? (finalBinary += '1')
        : (finalBinary += '0');

      return finalBinary;
    }, '');
  const epsilonRateString = gammaRateString
    .split('')
    .map((i) => (i === '1' ? '0' : '1'))
    .join('');
  return parseInt(gammaRateString, 2) * parseInt(epsilonRateString, 2);
};

export const binaryDiagnosticPart2 = (input) => {};
