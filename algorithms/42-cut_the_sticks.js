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
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    // Write your code here
    let answer = [];
    arr.sort((a,b)=>a-b);
    console.log(arr);
    for(let i = 0; i<arr.length;){
        console.log(i);
        const cut = arr[i];
        let count = 0;
                
        // Cut The min value from array
        for(let j = i;j<arr.length;j++){
            if(arr[j] === cut) 
                i++; 
            
            arr[j] = arr[j] - cut;
            count++;
        }
        answer.push(count);
        
        // break if all remaining numbers are same
        if(arr[i]===arr[arr.length-1]){
            answer.push(arr.length-i);
            break;
        }
    }
    return answer;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = cutTheSticks(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
