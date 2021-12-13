const reverseMatch = { ')': '(', ']': '[', '}': '{', '>': '<' };

export const syntaxScoringPart1 = (input) => {
  const inputParsed = input.split('\n').map((i) => i.trim().split(''));
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

export const syntaxScoringPart2 = (input) => {
  const inputParsed = input.split('\n').map((i) => i.trim().split(''));
  const matchingCharacters = { '(': ')', '[': ']', '{': '}', '<': '>' };
  const scoring = { ')': 1, ']': 2, '}': 3, '>': 4 };
  let syntaxIncompleteScores = [];

  inputParsed.forEach((input) => {
    const cleaned = removeEmptyTags(input);
    const hasIncompleteSyntax = cleaned.every((c) => matchingCharacters[c]);
    if (hasIncompleteSyntax) {
      const score = cleaned.reverse().reduce((totalScore, err) => {
        totalScore = totalScore * 5 + scoring[matchingCharacters[err]];
        return totalScore;
      }, 0);
      syntaxIncompleteScores.push(score);
    }
  });
  const middleScore = syntaxIncompleteScores.sort((a, b) => a - b)[
    Math.floor(syntaxIncompleteScores.length / 2)
  ];
  return middleScore;
};

const removeEmptyTags = (dirty) => {
  const dirtyLength = dirty.length - 1;
  const emptyTagsRemoved = dirty.reduceRight((acc, curr, index) => {
    if (index > 0 && reverseMatch[curr] === dirty[index - 1]) {
      acc.splice(index - 1, 2);
    }
    return acc;
  }, dirty);
  if (dirtyLength > emptyTagsRemoved.length) {
    return removeEmptyTags(emptyTagsRemoved);
  }
  return emptyTagsRemoved;
};
