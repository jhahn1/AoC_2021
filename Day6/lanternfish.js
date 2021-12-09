export const lanternfishPart1 = (input, duration) => {
  let day = 0;
  let lanternfishList = input.split(',').map((fish) => parseInt(fish));

  const calculateLanternfish = () => {
    const newFish = lanternfishList.reduce((newFish, fish, index) => {
      if (fish === 0) {
        lanternfishList[index] = 6;
        newFish.push(8);
      } else {
        lanternfishList[index] = lanternfishList[index] - 1;
      }
      return newFish;
    }, []);
    if (newFish.length > 0) {
      lanternfishList.push(newFish);
      lanternfishList = lanternfishList.flat();
    }
  };

  while (day < duration) {
    console.log('day: ', day);
    calculateLanternfish();
    day++;
  }

  return lanternfishList.length;
};

// export const lanternfishPart2 = (
//   originalInput,
//   endingFish,
//   originalDuration,
//   testDuration
// ) => {
//   let origInput = originalInput.split(',').map((fish) => parseInt(fish));
//   const sumOriginalInput = origInput.reduce((acc, d) => {
//     acc += d;
//     return acc;
//   }, 0);
//   const avgOriginalInput = sumOriginalInput / origInput.length;
//   let originalDurationAdjusted = originalDuration - avgOriginalInput;
//   const partialFishAtBeginning = sumOriginalInput / 7;
//   const startingFish = origInput.length;
//   let simplify = endingFish / startingFish;
//   let naturalLog = Math.log(simplify);
//   let expGrowthRate = naturalLog / originalDuration;
//   const totalFishCount =
//     startingFish * Math.pow(1 + expGrowthRate, testDuration);
//   const totaltotal = Math.floor(totalFishCount + partialFishAtBeginning);

//   return totaltotal;
// };

export const lanternfishPart2 = (input, duration) => {
  let day = 0;
  const lanternfishList = input.split(',').map((fish) => parseInt(fish));
  let fishCount = lanternfishList.length;
  let fishList = [
    { count: 0, new: false },
    { count: 0, new: false },
    { count: 0, new: false },
    { count: 0, new: false },
    { count: 0, new: false },
    { count: 0, new: false },
    { count: 0, new: false },
    { count: 0, new: false },
    { count: 0, new: false },
    { count: 0, new: false },
  ];
  lanternfishList.forEach((fish) => {
    fishList[fish].count++;
  });

  const calculateLanternfish = () => {
    fishList.forEach((fish, index) => {
      if (index === 0 && fish.count > 0) {
        fishList[9].count += fish.count;
        fishList[9].new = true;
        fishCount += fish.count;
        fishList[7].count += fish.count;
        fishList[7].new = false;
        fishList[0].count = 0;
      } else if (index !== 0 && fish.count > 0) {
        fishList[index - 1].count += fish.count;
        fishList[index - 1].new = fish.new;
        fishList[index].count = 0;
        fishList[index].new = false;
      }
    });
  };

  while (day < duration) {
    calculateLanternfish();
    day++;
  }

  return fishCount;
};
