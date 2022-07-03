function calcSum(nums) {
  let i = nums.length - 1;

  if (nums.length === 1) {
    return nums.pop();
  }

  return nums.pop() + calcSum(nums);
}
