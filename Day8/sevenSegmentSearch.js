export const sevenSegmentSearch = (input) => {
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
