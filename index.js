// 8x8 array
const MIN = 0;
const MAX = 7;

function knightMoves(startCoordinate, targetCoordinate) {
  const possibleMoves = [];
  for (let i = 0; i < MAX + 1; i++) {
    const moveRow = [];
    for (let j = 0; j < MAX + 1; j++) {
      const node = [];
      if (i + 2 < MAX) {
        if (j + 1 < MAX) {
          node.push([i + 2, j + 1])
        };
        if (j - 1 > MIN) {
          node.push([i + 2, j - 1]);
        };
      };
      if (i + 1 < MAX) {        
        if (j + 2 < MAX) {
          node.push([i + 1, j + 2]);
        };
        if (j - 2 > MIN) {
          node.push([i + 1, j - 2]);
        };
      };

      if (i - 2 > MIN) {
        if (j + 1 < MAX) {
          node.push([i - 2, j + 1])
        };
        if (j - 1 > MIN) {
          node.push([i - 2, j - 1]);
        };
      };
      if (i - 1 > MIN) {        
        if (j + 2 < MAX) {
          node.push([i - 1, j + 2]);
        };
        if (j - 2 > MIN) {
          node.push([i - 1, j - 2]);
        };
      };
      moveRow.push(node);
    };    
    possibleMoves.push(moveRow);
  };
  return possibleMoves[3][3];
};

console.log(knightMoves());

