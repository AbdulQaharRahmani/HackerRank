'use strict';
// This code is really not optimized and i don't like it but it works
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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    a.sort();
    console.log(a);
    let max = 0;
    for (let i = 0; i<a.length-1;){
        let total = 1;
        let newNumber = a[i];
        let newNumberIndex = i+1;
        
        for (let j = i+1; j < a.length;j++){
            if(a[j]-a[i]<=1 && a[j]-a[i]>=0){
                total++;
                if(newNumber !== a[j]){
                    newNumber = a[j];
                    newNumberIndex = j;
                }
            }else{
                break;
            }
        }
        if(total>max){
            max = total;
        }        
        i = newNumberIndex;
    }
     return max;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
