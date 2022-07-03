function sortArray(nums) {
  if (nums.length < 2) {
    return nums;
  }

  const pivot = nums.pop();
  const less = nums.filter((num) => num <= pivot);
  const greater = nums.filter((num) => num > pivot);

  return [...sortArray(less), pivot, ...sortArray(greater)];
}
