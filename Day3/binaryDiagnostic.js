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

export const binaryDiagnosticPart2 = (input) => {
  let report = input.split('\n').map((binary) => binary.trim().split(''));
  const o2GeneratorRating = readDiagnosticReport(report, 'o2', 0);
  const lifeSupportRating = readDiagnosticReport(report, 'lifeSupport', 0);
  return parseInt(o2GeneratorRating, 2) * parseInt(lifeSupportRating, 2);
};

const readDiagnosticReport = (report, rating, iterator) => {
  if (report.length === 1) {
    return report[0].join('');
  }

  const sum = report.reduce((acc, currentValue) => {
    return parseInt(currentValue[iterator]) + acc;
  }, 0);

  if (rating === 'o2') {
    report = report.reduce((acc, currentValue) => {
      if (sum >= report.length / 2) {
        if (currentValue[iterator] === '1') {
          acc.push(currentValue);
        }
      } else if (currentValue[iterator] === '0') {
        acc.push(currentValue);
      }
      return acc;
    }, []);
  } else {
    report = report.reduce((acc, currentValue) => {
      if (sum >= report.length / 2) {
        if (currentValue[iterator] === '0') {
          acc.push(currentValue);
        }
      } else if (currentValue[iterator] === '1') {
        acc.push(currentValue);
      }
      return acc;
    }, []);
  }
  return readDiagnosticReport(report, rating, ++iterator);
};
