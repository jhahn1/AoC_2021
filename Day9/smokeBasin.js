const getLowPoints = (data) => {
  return data.reduce((lowPoints, row, rowIndex) => {
    row.forEach((point, pointIndex) => {
      const checkAbove =
        rowIndex > 0
          ? parseInt(data[rowIndex - 1][pointIndex]) > parseInt(point)
          : true;
      const checkBelow =
        rowIndex < data.length - 1
          ? parseInt(data[rowIndex + 1][pointIndex]) > parseInt(point)
          : true;
      const checkRight =
        pointIndex < row.length - 1
          ? parseInt(point) < parseInt(row[pointIndex + 1])
          : true;
      const checkLeft =
        pointIndex > 0 ? parseInt(point) < parseInt(row[pointIndex - 1]) : true;
      if (checkAbove && checkBelow && checkRight && checkLeft) {
        lowPoints.push([pointIndex, rowIndex]);
      }
    });
    return lowPoints;
  }, []);
};

export const smokeBasinPart1 = (input) => {
  const data = input.split('\n').map((row) => row.split(''));
  const sumOfRiskLevels = getLowPoints(data).reduce((sum, point) => {
    sum += parseInt(data[point[1]][point[0]]) + 1;
    return sum;
  }, 0);
  return sumOfRiskLevels;
};

const calculateBasinSize = (
  inputArray,
  coord,
  basinSet = new Set([coord.join()])
) => {
  const [x, y] = coord;
  const adjacentBasin = [];

  //Above
  const above = [x, y - 1];
  if (
    inputArray[y - 1] !== undefined &&
    +inputArray[y - 1][x] !== 9 &&
    !basinSet.has(above.join())
  ) {
    adjacentBasin.push(above);
    basinSet.add(above.join());
  }

  //Below
  const below = [x, y + 1];
  if (
    inputArray[y + 1] !== undefined &&
    +inputArray[y + 1][x] !== 9 &&
    !basinSet.has(below.join())
  ) {
    adjacentBasin.push(below);
    basinSet.add(below.join());
  }

  //Right
  const right = [x + 1, y];
  if (
    inputArray[y][x + 1] !== undefined &&
    +inputArray[y][x + 1] !== 9 &&
    !basinSet.has(right.join())
  ) {
    adjacentBasin.push(right);
    basinSet.add(right.join());
  }

  //Left
  const left = [x - 1, y];
  if (
    inputArray[y][x - 1] !== undefined &&
    +inputArray[y][x - 1] !== 9 &&
    !basinSet.has(left.join())
  ) {
    adjacentBasin.push(left);
    basinSet.add(left.join());
  }

  adjacentBasin.forEach((newCoor) =>
    calculateBasinSize(inputArray, newCoor, basinSet)
  );
  return basinSet.size;
};

export const smokeBasinPart2 = (input) => {
  const data = input.split('\n').map((row) => row.split(''));
  const basinLows = getLowPoints(data);
  const basinSizes = basinLows.map((coordinate) =>
    calculateBasinSize(data, coordinate)
  );
  const basinProduct = basinSizes
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((basinProduct, basin) => {
      basinProduct *= basin;
      return basinProduct;
    }, 1);
  return basinProduct;
};
