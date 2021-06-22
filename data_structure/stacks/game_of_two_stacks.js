'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'twoStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER maxSum
 *  2. INTEGER_ARRAY a
 *  3. INTEGER_ARRAY b
 */

function twoStacks(maxSum, a, b) {
    // Write your code here

    a = a.reverse();
    b = b.reverse();

    let sum = 0;
    let maxCount = 0;
   
    let arrayA = [];
    let arrayB = [];
    
    while (a.length > 0 && sum + a[a.length - 1] <= maxSum) {
        const num = a.pop();
        sum += num;
        arrayA.push(num);
    }
    maxCount = arrayA.length;
    let first = true;// if the array a is empty then this will check second array
    while (arrayA.length > 0 || first) {
        if (!first)
            sum = sum - arrayA.pop();
        while (sum + b[b.length - 1] <= maxSum) {
            const num = b.pop();
            sum += num;
            arrayB.push(num);
        }
        let currentMax = arrayB.length + arrayA.length;
        if (currentMax > maxCount) {
            maxCount = currentMax;
        }
        first = false;
    }
    console.log(arrayA, arrayB);
    return maxCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine().trim(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        const maxSum = parseInt(firstMultipleInput[2], 10);

        const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

        const result = twoStacks(maxSum, a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
