/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    
    let a=nums.sort((a,b)=>a-b);
    return ((a[a.length-1]*a[a.length-2])-(a[0]*a[1]));
};
