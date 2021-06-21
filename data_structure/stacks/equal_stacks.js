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
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */

function equalStacks(h1, h2, h3) {
    // Write your code here
    h1 = h1.reverse();
    h2 = h2.reverse();
    h3 = h3.reverse();
    let height1 = h1.reduce((prev, next) => prev + next);
    let height2 = h2.reduce((prev, next) => prev + next);
    let height3 = h3.reduce((prev, next) => prev + next);
    let min;
    while ((height1 !== height2 || height2 !== height3 || height1!==height3)) {
        min = Math.min(height1, height2, height3);
        height1 = reduceTillEqualToMin(h1, height1, min);
        height2 = reduceTillEqualToMin(h2, height2, min);
        height3 = reduceTillEqualToMin(h3, height3, min);
    }
    return height3;
}
function reduceTillEqualToMin(arr, total, min) {
    while (total > min && arr.length >= 0) {
        total = total - arr.pop();
    }
    return total;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n1 = parseInt(firstMultipleInput[0], 10);

    const n2 = parseInt(firstMultipleInput[1], 10);

    const n3 = parseInt(firstMultipleInput[2], 10);

    const h1 = readLine().replace(/\s+$/g, '').split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().replace(/\s+$/g, '').split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().replace(/\s+$/g, '').split(' ').map(h3Temp => parseInt(h3Temp, 10));

    const result = equalStacks(h1, h2, h3);

    ws.write(result + '\n');

    ws.end();
}
