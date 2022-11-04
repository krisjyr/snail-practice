function snail(array) {
  const length = array.length;
  let center = Math.ceil(length / 2);
  if (length % 2 == 0) {
    center += 1;
  }

  let queue = [];

  let fakeMatrix = [];

  function createMatrix(length) {
    let fakeRow = [];
    for (let i = 0; i < length; i++) {
      fakeRow.push(0);
    }
    for (let i = 0; i < length; i++) {
      fakeMatrix.push(fakeRow);
    }
  }

  function queuePush(x, y) {
    queue.push(array[y][x]);
  }

  createMatrix(length);

  function iterateMatrix(fakeMatrix) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < length * length; i++) {
      queuePush(x, y);
      fakeMatrix[y].splice(x, 1, -1);
      console.log(x, y);
      if (fakeMatrix[y] !== undefined) {
        if (y < 1) {
          x++;
        }
      }
      if (fakeMatrix[y][x] === undefined || x <= length) {
        y++;
        if (fakeMatrix[y][x] === undefined) {
          x--;
        }
      }
      //   if (y === undefined) {
      //     y--;
      //   }
      //   if (y <= length && y >= 1) {
      //     y++;
      //   }
      //   if (x >= 0 && y === length) {
      //     x--;
      //   }
      //   if (y <= length && x === 0) {
      //     y--;
      //     if (fakeMatrix[y][x] !== 0) {
      //       y++;
      //       x++;
      //     }
      //   }
    }
  }
  iterateMatrix(fakeMatrix);
  console.log(...fakeMatrix);
  console.log(queue);
  return queue;
}

snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
