function calcSum(nums) {
  if (nums.length === 0) {
    return 0;
  }
  
  if (nums.length === 1) {
    return nums.pop();
  }

  return nums.pop() + calcSum(nums);
}
