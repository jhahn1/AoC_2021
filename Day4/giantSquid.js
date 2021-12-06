export const giantSquid = (input, part2) => {
  const inputParsed = input.split('\n');
  const numbersDrawn = inputParsed[0].split(',');
  inputParsed.shift();
  const boardMap = inputParsed.reduce((acc, currentValue) => {
    if (currentValue.length === 0) {
      acc.push([]);
    } else {
      acc[acc.length - 1].push(currentValue.split(' ').filter((e) => e));
    }
    return acc;
  }, []);

  const checkBoards = () => {
    let winningNumAndBoardWithIndex = [];
    numbersDrawn.some((num) => {
      const loopMap = boardMap;
      loopMap.forEach((board, index) => {
        if (board !== 'BoardComplete') {
          board.forEach((row) => {
            if (row.indexOf(num) !== -1) {
              let matchingNumberIndex = row.indexOf(num);
              row[matchingNumberIndex] = 'X';
              if (
                row.every((r) => r === 'X') ||
                board.every((c) => c[matchingNumberIndex] === 'X')
              ) {
                winningNumAndBoardWithIndex.push([num, board, index]);
              }
            }
          });
        }
      });
      if (winningNumAndBoardWithIndex.length > 0 && part2) {
        winningNumAndBoardWithIndex.map((board) => {
          boardMap.splice(board[2], 1, 'BoardComplete');
        });
        if (boardMap.every((b) => b === 'BoardComplete')) {
          return true;
        } else {
          winningNumAndBoardWithIndex = [];
          return false;
        }
      } else if (
        boardMap.every((b) => b === 'BoardComplete') &&
        winningNumAndBoardWithIndex.length > 0
      ) {
        return true;
      } else if (!part2 && winningNumAndBoardWithIndex.length > 0) {
        return true;
      }
    });
    return [
      winningNumAndBoardWithIndex[0][0],
      winningNumAndBoardWithIndex[0][1],
    ];
  };

  const [winningNumber, winningBoard] = checkBoards();
  const flatWinningBoard = winningBoard.flat();
  const sum = flatWinningBoard.reduce((acc, currentValue) => {
    if (currentValue !== 'X') {
      acc += parseInt(currentValue);
    }
    return acc;
  }, 0);
  return sum * winningNumber;
};
