export const sevenSegmentSearchPart1 = (input) => {
  const numOfOccurences = input.split('\n').reduce((acc, i) => {
    const occurences = i
      .split('|')[1]
      .trim()
      .split(' ')
      .filter((outputValue) => [2, 4, 3, 7].includes(outputValue.length));
    acc += occurences.length;
    return acc;
  }, 0);
  return numOfOccurences;
};

export const sevenSegmentSearchPart2 = (input) => {
  const inputLines = input.split('\n');
  const outputSum = inputLines.reduce((sum, i) => {
    let easyOnes = {};
    const inputValues = i.split('|')[0].trim().split(' ');
    const outputValues = i.split('|')[1].trim().split(' ');
    inputValues
      .filter((inputValue) => [2, 4, 3, 7].includes(inputValue.length))
      .forEach((easyOne) => {
        switch (easyOne.length) {
          case 2:
            easyOnes[1] = easyOne.split('');
            return;
          case 3:
            easyOnes[7] = easyOne.split('');
            return;
          case 4:
            easyOnes[4] = easyOne.split('');
            return;
          case 7:
            easyOnes[8] = easyOne.split('');
            return;
          default:
            console.log(`Somethings fucked with ${easyOne}.`);
        }
      });

    //6 character
    inputValues
      .filter((inputValue) => inputValue.length === 6)
      .forEach((sixChar) => {
        const sixCharArray = sixChar.split('');
        const sixTest = sixCharArray.filter((o) => easyOnes[1].includes(o));
        if (sixTest.length < 2) {
          easyOnes[6] = sixCharArray;
        } else {
          const nineTest = sixCharArray.filter((f) => easyOnes[4].includes(f));
          if (nineTest.length === 4) {
            easyOnes[9] = sixCharArray;
          } else if (nineTest.length === 3) {
            easyOnes[0] = sixCharArray;
          } else {
            console.log('NOTHING HAPPENED HERE!');
          }
        }
      });

    //5 character
    inputValues
      .filter((inputValue) => inputValue.length === 5)
      .forEach((fiveChar) => {
        const fiveCharArray = fiveChar.split('');
        const threeTest = easyOnes[1].filter((o) => fiveCharArray.includes(o));
        if (threeTest.length === 2) {
          easyOnes[3] = fiveCharArray;
        } else {
          const fiveTest = easyOnes[6].filter((f) => fiveCharArray.includes(f));
          if (fiveTest.length === 5) {
            easyOnes[5] = fiveCharArray;
          } else if (fiveTest.length === 4) {
            easyOnes[2] = fiveCharArray;
          } else {
            console.log('NOTHING HAPPENED HERE!');
          }
        }
      });

    const output = outputValues.reduce((stringSum, value) => {
      const valueArray = value.split('');
      switch (valueArray.length) {
        case 2:
          stringSum += 1;
          return stringSum;
        case 3:
          stringSum += 7;
          return stringSum;
        case 4:
          stringSum += 4;
          return stringSum;
        case 5:
          const set5 = new Set(valueArray.concat(easyOnes[5]));
          const set3 = new Set(valueArray.concat(easyOnes[3]));
          stringSum += set5.size === 5 ? 5 : set3.size === 5 ? 3 : 2;
          return stringSum;
        case 6:
          const set6 = new Set(valueArray.concat(easyOnes[6]));
          const set9 = new Set(valueArray.concat(easyOnes[9]));
          stringSum += set6.size === 6 ? 6 : set9.size === 6 ? 9 : 0;
          return stringSum;
        case 7:
          stringSum += 8;
          return stringSum;
      }
    }, '');
    sum += parseInt(output);
    return sum;
  }, 0);
  return outputSum;
};
