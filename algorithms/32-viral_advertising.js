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
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    // Write your code here
    let totalLikes = 0;
    let likes = 0;
    let shares = 5;
    for(let i =0; i<n;i++){
        likes = Math.floor(shares/2);
        shares = likes * 3;
        totalLikes+=likes;
    }
    return totalLikes;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = viralAdvertising(n);

    ws.write(result + '\n');

    ws.end();
}
