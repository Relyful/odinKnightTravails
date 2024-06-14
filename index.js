// 8x8 array
const MIN = 0;
const MAX = 7;
const possibleMoves = allPossibleKnightMoves();

function allPossibleKnightMoves() {  
  const possibleMoves = [];
  for (let i = 0; i < MAX + 1; i++) {
    const moveRow = [];
    for (let j = 0; j < MAX + 1; j++) {
      const node = [];
      if (i + 2 <= MAX) {
        if (j + 1 <= MAX) {
          node.push([i + 2, j + 1]);
        }
        if (j - 1 >= MIN) {
          node.push([i + 2, j - 1]);
        }
      }
      if (i + 1 <= MAX) {        
        if (j + 2 <= MAX) {
          node.push([i + 1, j + 2]);
        }
        if (j - 2 >= MIN) {
          node.push([i + 1, j - 2]);
        }
      }

      if (i - 2 >= MIN) {
        if (j + 1 <= MAX) {
          node.push([i - 2, j + 1]);
        }
        if (j - 1 >= MIN) {
          node.push([i - 2, j - 1]);
        }
      }
      if (i - 1 >= MIN) {        
        if (j + 2 <= MAX) {
          node.push([i - 1, j + 2]);
        }
        if (j - 2 >= MIN) {
          node.push([i - 1, j - 2]);
        }
      }
      moveRow.push(node);
    }
    possibleMoves.push(moveRow);
  }
  return possibleMoves;  
}

function arraysEqual(arr1, arr2) {
  if (arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
    return true;
  } else {
    return false;
  }
}

function knightMoves(startCoordinate, targetCoordinate, queue = [], resultArr = [], visited = []) {
  if (arraysEqual(startCoordinate, targetCoordinate)) {
    resultArr.push(startCoordinate);
    return resultArr;
  }

  resultArr.push(startCoordinate);
  visited.push(startCoordinate.toString());

  const currentQueue = queue;
  const availableMoves = possibleMoves[startCoordinate[0]][startCoordinate[1]];
  for (const move of availableMoves) {
    if (!visited.includes(move.toString())) {
      const newResultArr = [...resultArr];
      currentQueue.push([move, newResultArr]);
    }
  }

  while (currentQueue.length > 0) {
    const [nextMove, path] = currentQueue.shift();
    const result = knightMoves(nextMove, targetCoordinate, currentQueue, path, visited);
    if (result) {
      return result;
    };
  };
};

const results = knightMoves([0,0], [7,7]);
const moveCount = results.length - 1;
console.log('You made it in ' + moveCount + " moves! Here's your path: ");
results.forEach(element => {
  console.log(element);
});

