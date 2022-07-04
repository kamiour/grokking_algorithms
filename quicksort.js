// selecting the first element as a pivot
function sortArray(nums) {
  if (nums.length < 2) {
    return nums;
  }

  const pivot = nums.pop();
  const less = nums.filter((num) => num <= pivot);
  const greater = nums.filter((num) => num > pivot);

  return [...sortArray(less), pivot, ...sortArray(greater)];
}

// selecting pivot in the middle of an array
function sortArray(nums) {
  if (nums.length < 2) {
    return nums;
  }

  const pivotIndex = Math.floor((nums.length - 1) / 2);
  const pivot = nums.splice(pivotIndex, 1)[0];
  const less = nums.filter((num) => num <= pivot);
  const greater = nums.filter((num) => num > pivot);

  return [...sortArray(less), pivot, ...sortArray(greater)];
}
