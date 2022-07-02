function getIndexOfSmallestInArray(nums) {
  let indexOfSmallest = 0;
  let smallest = nums[indexOfSmallest];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
      indexOfSmallest = i;
    }
  }

  return indexOfSmallest;
}

function sortArray(nums) {
  const result = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const indexOfSmallest = getIndexOfSmallestInArray(nums);
    result.push(nums.splice(indexOfSmallest, 1)[0]);
  }

  return result;
}
