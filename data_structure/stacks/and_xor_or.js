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
 * Complete the 'andXorOr' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function andXorOr(a) {
    // Write your code here
    let max = 0;
    let stack = [a[0]];
    for (let i = 1; i < a.length; i++) {
        let peak = stack.length - 1;
        let result;
        while (stack.length > 0 && a[i] <= stack[peak]) {
            result = (((a[i] & stack[peak]) ^ (a[i] | stack[peak])) & (a[i] ^ stack[peak]));
            stack.pop();
            peak = stack.length - 1;
            if (result > max) {
                
                max = result;
            }
        }


        if (stack.length > 0) {
            result = (((a[i] & stack[peak]) ^ (a[i] | stack[peak])) & (a[i] ^ stack[peak]));
        }
        
        stack.push(a[i]);


        if (result > max) {
            max = result;
        }

    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const aCount = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = andXorOr(a);

    ws.write(result + '\n');

    ws.end();
}
