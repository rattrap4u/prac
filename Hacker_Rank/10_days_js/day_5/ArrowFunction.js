//  Arrow function 


function arrowfunc(nums) {
    return nums.map(nums => nums%2===0 ? nums*2:nums*3);
}

console.log(arrowfunc([1,2,3,4,5,6]));