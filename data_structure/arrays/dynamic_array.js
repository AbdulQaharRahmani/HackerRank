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
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    let arr = new Array(n);
    let answers = [];
    let lastAnswer = 0;
    
    for(let i = 0; i<arr.length;i++){
    arr[i] = [];
    }
    
    for(let i = 0;i<queries.length;i++){
        let index = (queries[i][1]^lastAnswer) % n;
        
        if(queries[i][0]===1){
            console.log("index: "+index+" type 1 " + queries[i][2]);
            arr[index].push(queries[i][2]);
        }else{ 
            lastAnswer = arr[index][queries[i][2] % arr[index].length];
            answers.push(lastAnswer);
            console.log("index: " +index+" Type 2 "+lastAnswer);
        }
    }
    console.log('arr[0]: '+arr[0]);
    console.log('arr[1]: '+arr[1]);
    console.log('answers: '+answers);
    return answers;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
