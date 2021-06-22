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
 * Complete the 'largestRectangle' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY h as parameter.
 */
// brute force approach
function largestRectangle(h) {
    // Write your code here
    let max = 0;
    for(let i = 0;i<h.length;i++){
        let count = 1;
        let leftside = 1;
        let min = h[i];
        // left side
        while(i-leftside>=0 && h[i-leftside]>=min){
            count++;
            leftside++;
        }
        // right side
        let rightside = 1;
        while(i+rightside < h.length && h[i+rightside]>=min){
            rightside++;
            count++;
        }
        const area = count * min;
        if(area >max){
            max = area;
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const result = largestRectangle(h);

    ws.write(result + '\n');

    ws.end();
}
