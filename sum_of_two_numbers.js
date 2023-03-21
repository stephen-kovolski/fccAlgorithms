/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
*/


function twoSum(nums, target) {

    let first_num = [];
    let second_num;

    for (let i = 0; i < nums.length; i++){
        first_num = nums[i];
        second_num = nums[i]
       
    }

    console.log(first_num + second_num);
    console.log(second_num);

};

twoSum([5, 7, 9, 11], 20)