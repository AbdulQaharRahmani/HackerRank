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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    const roundedArray = [];
    // Write your code here
    for(let i = 0; i<grades.length;i++){
        // Find the nearest
        let fullMark = grades[i];
        if(grades[i]>=38){  
            const lastDigit = grades[i] % 10;
            if (lastDigit > 5 ){
                fullMark = grades[i] + 10 - lastDigit;
            }else if(lastDigit < 5 && grades[i] > 0 ){
                fullMark = grades[i] + 5 - lastDigit;
            }// No change if it's five or zero    
        } 
        // Check if The score needed is less than 3
        if(fullMark - grades[i] < 3 && grades[i]>=38){
            roundedArray[i] = fullMark;
        }else{
            roundedArray[i] = grades[i];
        }
    }
    return roundedArray;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
