'use strict';

const fs = require('fs');

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

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Find Minimum in second array
    const min = Math.min(...b);
    
    // Find All Factors of second array
    const factors = [];
    
    for(let i = 1; i<=min;i++){
        let isFactor = true;
        for(let j = 0; j<b.length;j++){
            if(b[j]%i !==0){
                isFactor = false;
                break;
            }
        }
        if(isFactor) factors.push(i);
    }
    console.log(factors);
    let total = 0;
    
    for(let i = 0; i<factors.length; i++){
        let isFactor = true;
        for(let j = 0; j<a.length;j++){
            if(factors[i]%a[j]!==0){
                isFactor = false;
                break;
            }
        }
        if(isFactor){
            total++;
        }
    }
    return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
