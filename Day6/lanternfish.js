export const lanternfish = (input) => {
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

  while (day < 80) {
    calculateLanternfish();
    day++;
  }

  return lanternfishList.length;
};
