export const divePart1 = (input) => {
  const directionMap = input.split('\n').reduce((acc, direction) => {
    const directions = direction.trim().split(' ');
    directions[0] in acc
      ? (acc[directions[0]] += parseInt(directions[1]))
      : (acc[directions[0]] = parseInt(directions[1]));
    return acc;
  }, {});
  console.log('direction map: ', directionMap);
  return directionMap['forward'] * (directionMap['down'] - directionMap['up']);
};

export const divePart2 = (input) => {
  const directionMap = input.split('\n').reduce(
    (acc, direction) => {
      const directions = direction.trim().split(' ');
      directions[0] in acc
        ? (acc[directions[0]] += parseInt(directions[1]))
        : (acc[directions[0]] = parseInt(directions[1]));
      if (directions[0] === 'forward') {
        acc['depth'] += directions[1] * ((acc['down'] || 0) - (acc['up'] || 0));
      }
      return acc;
    },
    { depth: 0 }
  );
  return directionMap['forward'] * directionMap['depth'];
};
