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
 * Complete the 'runningMedian' function below.
 *
 * The function is expected to return a DOUBLE_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
const sortedArray = [];
function runningMedian(a) {
    let answerArray = [];
    // Write your code here
    // i will use insertion sort for my brute force approach    
    a.forEach(num => {
        insert(num);
        const length = sortedArray.length;
        if (length % 2 !== 0) {
            const index = Math.floor(length / 2);
            answerArray.push( parseFloat(sortedArray[index].toFixed(1)));
        }
        else {
            const index = Math.floor(length / 2);
            const ans = (sortedArray[index] + sortedArray[index - 1]) / 2;
            answerArray.push(parseFloat(ans.toFixed(1)));
        }

    });
    return answerArray;
}
function insert(value) {
    sortedArray.push(value);
    for (let i = sortedArray.length - 1; i > 0 && sortedArray[i] < sortedArray[i - 1]; i--) {
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[i - 1];
        sortedArray[i - 1] = temp;
    }
}




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const aCount = parseInt(readLine().trim(), 10);

    let a = [];

    for (let i = 0; i < aCount; i++) {
        const aItem = parseInt(readLine().trim(), 10);
        a.push(aItem);
    }

    const result = runningMedian(a);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
