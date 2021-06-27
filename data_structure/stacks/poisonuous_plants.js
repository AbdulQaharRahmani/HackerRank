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
 * Complete the 'poisonousPlants' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

// my brute force approach which passes most test cases but not all
function poisonousPlants(p) {
    // Write your code here

    let tempArray = [];
    let count = 0;
    let arrayChanged = false;
    do {
        arrayChanged = false;
        let first = p.pop();
        let second;
        while (p.length > 0) {
            second = p.pop();
            // console.log(first,second);
            if (first <= second) {
                tempArray.push(first);
            } else {
                arrayChanged = true;
            }
            first = second;
        }
        tempArray.push(second);//pushing first element
        count++;
        while (tempArray.length > 0) {
            p.push(tempArray.pop());
        }
       
    } while (arrayChanged);

    return count-1;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = readLine().replace(/\s+$/g, '').split(' ').map(pTemp => parseInt(pTemp, 10));

    const result = poisonousPlants(p);

    ws.write(result + '\n');

    ws.end();
}
