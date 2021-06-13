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
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here
    let reverseArray = [];
    for(let i = a.length-1;i>=0;i--){
        reverseArray.push(a[i]);
    }
    return reverseArray;
}
// for in place reverse of the same array
// function reverseArray(a) {
//     // Write your code here
//     for(let i = 0;i<a.length/2;i++){
//         let temp = a[i];
//         a[i] = a[a.length-i-1];
//         a[a.length-i-1] = temp;
//     }
//     return a;
// }
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
