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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 1;i<arr.length-1;i++){
        for(let j = 1;j<arr[0].length-1;j++){
            const total = 
                 arr[i][j] // number itself 
                + arr[i-1][j+1] // top right 
                + arr[i-1][j] // top
                + arr[i-1][j-1] // top left
                + arr[i+1][j] // bottom
                + arr[i+1][j+1] // bottom right
                + arr[i+1][j-1]; // bottom left
            if(total>max){
                max = total;
            }
                
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
