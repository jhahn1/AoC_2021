export const treacheryOfWhalesPart1 = (input) => {
  const parsedInput = input.split(',').map((e) => parseInt(e));
  const sortedInput = parsedInput.sort((a, b) => b - a);
  let currentLow = 0;

  for (let i = 0; i < sortedInput[0]; i++) {
    const currentSum = sortedInput.reduce((acc, crab) => {
      acc += Math.abs(crab - i);
      return acc;
    }, 0);
    if (currentSum > currentLow && currentLow !== 0) {
      break;
    } else {
      currentLow = currentSum;
    }
  }

  return currentLow;
};

export const treacheryOfWhalesPart2 = (input) => {
  const parsedInput = input.split(',').map((e) => parseInt(e));
  const sortedInput = parsedInput.sort((a, b) => b - a);
  let currentLow = 0;

  for (let i = 0; i < sortedInput[0]; i++) {
    const currentSum = sortedInput.reduce((totalFuel, crab) => {
      const distance = Math.abs(crab - i);
      const steps = Array.from(
        { length: Math.abs(crab - i) },
        (_, i) => distance - i
      );
      const fuel = steps.reduce((crabFuel, step) => {
        crabFuel += step;
        return crabFuel;
      }, 0);
      totalFuel += fuel;
      return totalFuel;
    }, 0);
    if (currentSum > currentLow && currentLow !== 0) {
      break;
    } else {
      currentLow = currentSum;
    }
  }

  return currentLow;
};
