export const dumboOctopus = (part1, input, steps) => {
  let flashCount = 0;
  let stepCount = 0;
  const inputParsed = input.split('\n').map((row) =>
    row
      .trim()
      .split('')
      .map((i) => +i)
  );

  const getAdjacentOctopi = (x, y) => {
    const adjacentOcts = [];

    //N
    const north = [x, y - 1];
    if (inputParsed[y - 1] !== undefined) {
      adjacentOcts.push(north);
    }

    //NE
    const northeast = [x + 1, y - 1];
    if (
      inputParsed[y - 1] !== undefined &&
      inputParsed[y - 1][x + 1] !== undefined
    ) {
      adjacentOcts.push(northeast);
    }

    //E
    const east = [x + 1, y];
    if (inputParsed[y][x + 1] !== undefined) {
      adjacentOcts.push(east);
    }

    //SE
    const southeast = [x + 1, y + 1];
    if (
      inputParsed[y + 1] !== undefined &&
      inputParsed[y + 1][x + 1] !== undefined
    ) {
      adjacentOcts.push(southeast);
    }

    //SE
    const south = [x, y + 1];
    if (inputParsed[y + 1] !== undefined) {
      adjacentOcts.push(south);
    }

    //SW
    const southwest = [x - 1, y + 1];
    if (
      inputParsed[y + 1] !== undefined &&
      inputParsed[y + 1][x - 1] !== undefined
    ) {
      adjacentOcts.push(southwest);
    }

    //W
    const west = [x - 1, y];
    if (inputParsed[y][x - 1] !== undefined) {
      adjacentOcts.push(west);
    }

    //NW
    const northwest = [x - 1, y - 1];
    if (
      inputParsed[y - 1] !== undefined &&
      inputParsed[y - 1][x - 1] !== undefined
    ) {
      adjacentOcts.push(northwest);
    }

    return adjacentOcts;
  };

  const calculateFlashes = (octopiCoordinates) => {
    if (octopiCoordinates.length === 0) {
      return;
    }
    octopiCoordinates.map((octopus) => {
      let adjacentOctos = [];
      const [x, y] = octopus;
      if (inputParsed[y][x] === 9) {
        // inputParsed[y][x] = 0;
        adjacentOctos.push(getAdjacentOctopi(x, y));
        adjacentOctos = adjacentOctos.flat();
      }
      inputParsed[y][x]++;
      if (adjacentOctos.length > 0) {
        // flashCount += adjacentOctos.length;
        return calculateFlashes(adjacentOctos);
      }
      return adjacentOctos;
    });
  };

  const calculatePart1 = () => {
    for (let i = 0; i < steps; i++) {
      inputParsed.forEach((row, rowIndex) => {
        const octopusCoordinates = row.reduce((octoCoords, _, octoIndex) => {
          octoCoords.push([octoIndex, rowIndex]);
          return octoCoords;
        }, []);
        calculateFlashes(octopusCoordinates);
      });
      inputParsed.forEach((updatedOctopi, rowIndex) => {
        updatedOctopi.forEach((updatedOctopus, octoIndex) => {
          if (updatedOctopus > 9) {
            inputParsed[rowIndex][octoIndex] = 0;
            flashCount++;
          }
        });
      });
    }

    console.log('Flash Count: ', flashCount);
    return flashCount;
  };

  const calculatePart2 = () => {
    let steps = 0;
    const allFlashing = false;
    while (!allFlashing) {
      steps++;
      inputParsed.forEach((row, rowIndex) => {
        const octopusCoordinates = row.reduce((octoCoords, _, octoIndex) => {
          octoCoords.push([octoIndex, rowIndex]);
          return octoCoords;
        }, []);
        calculateFlashes(octopusCoordinates);
      });
      const allOctopiFlashing = inputParsed
        .flat()
        .every((octopus) => octopus > 9);
      if (allOctopiFlashing) {
        break;
      }
      inputParsed.forEach((updatedOctopi, rowIndex) => {
        updatedOctopi.forEach((updatedOctopus, octoIndex) => {
          if (updatedOctopus > 9) {
            inputParsed[rowIndex][octoIndex] = 0;
          }
        });
      });
    }
    return steps;
  };

  if (part1) {
    return calculatePart1();
  } else {
    return calculatePart2();
  }
};
