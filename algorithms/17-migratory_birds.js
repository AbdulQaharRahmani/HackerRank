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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let alreadySeen = [];
    let maxShown = 1;
    let minNumber = arr[0];
    
    for (let i = 0; i<arr.length;i++){
        if(alreadySeen.includes(arr[i])){
            continue;
        }
        let total = 1;
        alreadySeen.push(arr[i]);
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]===arr[i]){
                total++;
            }
        }
        if(total>maxShown){
            maxShown = total;
            minNumber = arr[i];
        }
        else if(total=== maxShown){
            minNumber = arr[i] < minNumber ? arr[i] : minNumber;
        }
    }
    return minNumber;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
