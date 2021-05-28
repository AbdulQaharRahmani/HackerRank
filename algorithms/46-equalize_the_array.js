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
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    // Write your code here
    let max = 0;
    for (let i = 0;i<arr.length-1;i++){
        let count = 1;
        for (let j = i+1;j<arr.length;j++){
            if(arr[j]===arr[i]){
                count++;
            }
        }
        if(count > max){
            max = count;
        }
    }
    return arr.length - max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = equalizeArray(arr);

    ws.write(result + '\n');

    ws.end();
}
