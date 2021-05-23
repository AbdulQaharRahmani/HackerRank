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
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    // Write your code here
    let total = 0;
    for(let start = i; start<=j;start++){
        let diff = abs(start - reverse(start));
        if(diff % k ===0){
            total++;
        }
    }
    return total;
}
function reverse(num){
    let r = 0;
    while(num!==0){
        r*= 10;
        r = r + num % 10;
        num = Math.floor(num/10);
    }
    return r;
}
function abs(num){
    return num > 0 ? num : -num;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const i = parseInt(firstMultipleInput[0], 10);

    const j = parseInt(firstMultipleInput[1], 10);

    const k = parseInt(firstMultipleInput[2], 10);

    const result = beautifulDays(i, j, k);

    ws.write(result + '\n');

    ws.end();
}
