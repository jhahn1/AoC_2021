const reverseMatch = { ')': '(', ']': '[', '}': '{', '>': '<' };

export const syntaxScoring = (input) => {
  const inputParsed = input.split('\n').map((i) => i.trim().split(''));
  const matchingCharacters = { '(': ')', '[': ']', '{': '}', '<': '>' };
  let syntaxErrors = [];
  const scoring = { ')': 3, ']': 57, '}': 1197, '>': 25137 };

  inputParsed.forEach((input) => {
    const hasInvalidChar = removeEmptyTags(input).find((w) => reverseMatch[w]);
    if (hasInvalidChar) {
      syntaxErrors.push(hasInvalidChar);
    }
  });
  const score = syntaxErrors.reduce((sum, err) => {
    sum += scoring[err];
    return sum;
  }, 0);
  return score;
};

const removeEmptyTags = (dirty) => {
  const dirtyLength = dirty.length - 1;
  const emptyTagsRemoved = dirty.reduceRight((acc, curr, index) => {
    if (reverseMatch[curr] === dirty[index - 1]) {
      acc.splice(index - 1, 2);
    }
    return acc;
  }, dirty);
  if (dirtyLength > emptyTagsRemoved.length) {
    return removeEmptyTags(emptyTagsRemoved);
  }
  return emptyTagsRemoved;
};
