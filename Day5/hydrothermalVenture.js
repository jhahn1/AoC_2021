export const hydrothermalVenture = (input, part2) => {
  const parsedInput = input.split('\n').reduce((acc, currentValue) => {
    acc.push(currentValue.trim().split(/=>| /));
    return acc;
  }, []);
  const ventLineCoordinates = parsedInput.reduce(
    (ventLineCoordinates, currentValue) => {
      const [origin, destination] = currentValue.reduce(
        (originDestination, i) => {
          if (i !== '->') {
            originDestination.push(i.split(',').map((i) => parseInt(i.trim())));
          }
          return originDestination;
        },
        []
      );
      if (origin[0] === destination[0] || origin[1] === destination[1]) {
        lineCoordinatesHorizontalVertical([origin, destination]).forEach(
          (coord) => {
            const coordString = coord.join();
            ventLineCoordinates[coordString] = ventLineCoordinates[coordString]
              ? ventLineCoordinates[coordString] + 1
              : 1;
          }
        );
      } else if (part2) {
        lineCoordinatesDiagonal([origin, destination]).forEach((coord) => {
          const coordString = coord.join();
          ventLineCoordinates[coordString] = ventLineCoordinates[coordString]
            ? ventLineCoordinates[coordString] + 1
            : 1;
        });
      }
      return ventLineCoordinates;
    },
    {}
  );
  return Object.values(ventLineCoordinates).filter((coord) => coord > 1).length;
};

const lineCoordinatesHorizontalVertical = ([origin, destination]) => {
  try {
    const vertical = origin[0] === destination[0];
    const [first, second] = vertical
      ? [origin, destination].sort((a, b) => a[1] - b[1])
      : [origin, destination].sort((a, b) => a[0] - b[0]);
    const length = (vertical ? second[1] - first[1] : second[0] - first[0]) + 1;
    const coordArray = Array.from({ length: length }, (_, i) =>
      vertical ? [first[0], first[1] + i] : [first[0] + i, first[1]]
    );
    return coordArray;
  } catch (err) {
    console.error('WTF!');
  }
};

const lineCoordinatesDiagonal = ([origin, destination]) => {
  try {
    const [first, second] = [origin, destination].sort((a, b) => a[0] - b[0]);
    const backSlash = first[1] < second[1];
    const length = Math.abs(first[0] - second[0]) + 1;
    const coordArray = Array.from({ length: length }, (_, i) =>
      backSlash ? [first[0] + i, first[1] + i] : [first[0] + i, first[1] - i]
    );
    return coordArray;
  } catch (err) {
    console.error('WTF!');
  }
};
