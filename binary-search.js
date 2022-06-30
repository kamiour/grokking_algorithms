function findNumInArray(arr, num) {
  let numberOfIterations = 0;

  let low = 0;
  let high = arr.length - 1;

  while (high - low >= 0) {
    numberOfIterations++;
    let guess = arr[Math.floor((low + high) / 2)];

    if (guess === num) {
      return `Value: ${guess}. Number of iterations: ${numberOfIterations}`;
    }

    if (guess < num) {
      low = guess + 1;
    }

    if (guess > num) {
      high = guess - 1;
    }
  }

  return `Value: Not found. Number of iterations: ${numberOfIterations}.`;
}

findNumInArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3);
