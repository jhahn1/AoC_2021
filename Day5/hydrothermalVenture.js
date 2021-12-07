export const hydrothermalVenture = (input) => {
  try {
    let intersections = new Set();
    let intersectionCount = 0;
    const parsedInput = input.split('\n').reduce((acc, currentValue) => {
      acc.push(currentValue.split(/=>| /));
      return acc;
    }, []);
    parsedInput.reduce((ventLineCoordinates, currentValue, index) => {
      const [origin, destination] = currentValue.reduce(
        (originDestination, i) => {
          i !== '->' &&
            originDestination.push(i.split(',').map((i) => parseInt(i)));
          return originDestination;
        },
        []
      );
      if (origin[0] !== destination[0] && origin[1] !== destination[1]) {
        //   console.log(`skipping ${origin}:${destination}`);
      } else {
        const sortedCoords = [origin, destination].sort();
        lineCoordinates(sortedCoords).map((coord) => {
          const coordString = coord.join();
          if (ventLineCoordinates.has(coordString)) {
            intersections.add(coordString);
            intersectionCount++;
            console.log(
              `intersection count: ${intersectionCount} intersection size: ${intersections.size}`
            );
          } else {
            ventLineCoordinates.add(coordString);
          }
        });
      }
      return ventLineCoordinates;
    }, new Set());
    return intersections.size;
  } catch (err) {
    console.error('Theres a fuckin error');
  }
};

const lineCoordinates = ([origin, destination]) => {
  const vertical = origin[0] === destination[0];
  const length =
    Math.abs(
      vertical ? origin[1] - destination[1] : origin[0] - destination[0]
    ) + 1;
  const coordArray = Array.from({ length: length }, (_, i) =>
    vertical ? [origin[0], origin[1] + i] : [origin[0] + i, origin[1]]
  );
  return coordArray;
};
