'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Creating two temporary Arrays to hold max 4 numbers and min 4 numbers
const maxArray = [];
const minArray = [];

function addElementToMaxArray(n){
    
    if(maxArray.length<4){
        maxArray.push(n);
        return ;
    }
    // Find index of min
    let minIndex = 0;
    let min = maxArray[0];

    for(let i = 1; i<maxArray.length;i++){
        if(maxArray[i]<min){
            min = maxArray[i];
            minIndex = i;
        }
    }
    if(n > maxArray[minIndex])
        maxArray[minIndex] = n;
}
function addElementToMinArray(n){
    
    if(minArray.length<4){
        minArray.push(n);
        return ;
    }
    // Find index of max
    let maxIndex = 0;
    let max = minArray[0];

    for(let i = 1; i<minArray.length;i++){
        if(minArray[i]>max){
            max = minArray[i];
            maxIndex = i;
        }
    }
    if(n < minArray[maxIndex])
        minArray[maxIndex] = n;
}

function miniMaxSum(arr){
    // Add all elements to max Array and min array
    for(let i of arr){
        addElementToMaxArray(i);
        addElementToMinArray(i);
    }
    // Get sum of max array
    const max = maxArray.reduce((prev,curr)=>prev+curr);
    const min = minArray.reduce((prev,curr)=>prev+curr);
    console.log(`${min} ${max}`);
}


function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
