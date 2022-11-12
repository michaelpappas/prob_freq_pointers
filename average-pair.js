"use strict";
// add whatever parameters you deem necessary & write docstring

//returning a boolean
//inputs are an sorted array of numbers and a number
//determine if there is a pair of numbers where the average of the two is the target number
//initialize two variables, left is equal to the first index and right is equal to the last index
//right a while statement where left is less than right
//establish a consant called avg of the values where the pointers are pointing
//if the avg is equal to our targetAvg then return true
//else if the avg is less than the targetAvg increment left pointer by 1
// else decrement right pointer by 1
//return false

//edge case: if the lenght of the input array is less than two return false

function averagePair(nums, targetAvg) {
  if (nums.length < 2) {
    return false;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
