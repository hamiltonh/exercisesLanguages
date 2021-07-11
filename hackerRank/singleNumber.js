// Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

 
// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */

 const isUnique = function (elem, array){
    
    let count = 0
    for (let num of array ){
        if(num === elem){
            count++   
        }
    }
    return count === 1
}

var singleNumber = function(nums) {
    
   return nums.find( (el, idx, array) => isUnique(el, array) )
};

console.log(singleNumber([1,2,2,3,5,5,2]));