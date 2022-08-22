function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        return [i, x];
      }
    }
  }
}

console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([2, 7, 11, 15], 9));
