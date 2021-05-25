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
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
    const arr = toDigitArray(n);
    let total = 0;
    for (let num of arr) {
        if (num !== 0 && n % num === 0) {
            total++;
        }
    }
    return total;
}
function toDigitArray(num) {
    const digitArray = [];
    while (num !== 0) {
        digitArray.push(num % 10);
        num = Math.floor(num / 10);
    }
    return digitArray;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = findDigits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
