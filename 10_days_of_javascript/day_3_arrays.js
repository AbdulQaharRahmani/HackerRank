'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let firstLarge = nums[0];
    let secondLarge = nums[0];
    
    for(let i = 1; i<nums.length;i++){
        if(nums[i] > firstLarge){
            secondLarge = firstLarge;
            firstLarge = nums[i];
        }else if(nums[i]>secondLarge && nums[i]!==firstLarge){
            secondLarge = nums[i];
        }
    }
    return secondLarge;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}