/*

LEETCODE

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
*/


function twoSum(nums, target) {

   
    let answer = [];

    for (let i = 1; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (nums[i] + nums[j] == target){

                answer.push([i], [j])
                
            }
        }

    }
    console.log(answer);

};

twoSum([5, 7, 9, 11], 20)


