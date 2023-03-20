/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
*/


function twoSum(nums, target) {

    let numbers = nums[0];
    let second_num;
    
    for (let i = 0; i < nums.length; i++){
      
        if (nums[i] + numbers === 20){
            second_num = nums[i];
            console.log(second_num);
        }

    }

    console.log(numbers, second_num);

};

twoSum([5, 7, 9, 11], 20)

//test