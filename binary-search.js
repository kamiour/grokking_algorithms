function findNumInArray(arr, num) {
  let numberOfIterations = 0;

  let low = 0;
  let high = arr.length - 1;

  while (high - low >= 0) {
    numberOfIterations++;

    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    if (guess === num) {
      return `Value: ${guess}. Number of iterations: ${numberOfIterations}`;
    }

    if (guess < num) {
      low = mid + 1;
    }

    if (guess > num) {
      high = mid - 1;
    }
  }

  return `Value: Not found. Number of iterations: ${numberOfIterations}.`;
}

findNumInArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3);
findNumInArray([0, 3, 4, 8, 11], 5);