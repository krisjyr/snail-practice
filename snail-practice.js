function snail(array) {
  const length = array.length;

  let rotationCount = 0;

  let right = true;
  let bottom = false;
  let left = false;
  let top = false;

  let queue = [];

  let fakeMatrix = [];

  function createMatrix(length) {
    let fakeRow = [];
    for (let i = 0; i < length; i++) {
      fakeRow.push(0);
    }
    for (let i = 0; i < length; i++) {
      fakeMatrix.push([...fakeRow]);
    }
  }

  function queuePush(x, y) {
    console.log("Push");
    queue.push(array[y][x]);
  }

  createMatrix(length);

  function iterateMatrix(fakeMatrix) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < length * length; i++) {
      fakeMatrix[y][x] = -1;
      console.log(x, y);
      console.log(fakeMatrix);

      console.log(`${rotationCount} RotationCount`);

      function turnRight() {
        console.log("Turning");
        rotationCount++;
        i--
        if (right === true) {
          bottom = true;
          right = false;
          console.log("Bottom");
        } else if (bottom === true) {
          left = true;
          bottom = false;
          console.log("left");
        } else if (left === true) {
          top = true;
          left = false;
          console.log("Top");
        } else if (top === true) {
          right = true;
          top = false;
          console.log("Right");
        }
      }

      function moveForward() {
        if (right === true) {
          x++;
        } else if (bottom === true) {
          y++;
        } else if (left === true) {
          x--;
        } else if (top === true) {
          y--;
        }
        rotationCount = 0;
      }

      if (rotationCount === 4) {
        queuePush(x, y);
        break;
      }
      if (right === true) {
        if (fakeMatrix[y]?.[x + 1] === 0) {
          queuePush(x, y);
          moveForward();
        } else {
          turnRight();
        }
      } else if (bottom === true) {
        if (fakeMatrix[y + 1]?.[x] === 0) {
          queuePush(x, y);
          moveForward();
        } else {
          turnRight();
        }
      } else if (left === true) {
        if (fakeMatrix[y]?.[x - 1] === 0) {
          queuePush(x, y);
          moveForward();
        } else {
          turnRight();
        }
      } else if (top === true) {
        if (fakeMatrix[y - 1]?.[x] === 0) {
          queuePush(x, y);
          moveForward();
        } else {
          turnRight();
        }
      }
    }
  }
  if (array.length > 1) {
    iterateMatrix(fakeMatrix);
    console.log(queue);
    return queue;
  } else {
    return array[0];
  }
}

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);
