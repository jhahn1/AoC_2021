export const sonarSweepPart1 = (input) => {
  return input.reduce((acc, currentValue, currentIndex) => {
    return acc + Number(currentValue > input[currentIndex - 1]);
  }, 0);
};

export const sonarSweepPart2 = (input) => {
  return sonarSweepPart1(
    input.reduce((acc, currentValue, currentIndex) => {
      if (currentIndex + 2 < input.length) {
        acc.push(
          currentValue + input[currentIndex + 1] + input[currentIndex + 2]
        );
      }
      return acc;
    }, [])
  );
};
