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
 * Complete the 'waiter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY number
 *  2. INTEGER q
 */

function waiter(number, q) {  let primeArray = getPrimeNumbers(q);
  let answers = [];
  let b = [];
  
  for (let i = 0; i < primeArray.length && number.length > 0; i++) {
    let temp = [];
    while (number.length > 0) {
      const num = number.pop();
      if (num % primeArray[i] === 0) {
        b.push(num);
      } else {
        temp.push(num);
      }
    }
    number = temp.slice();
    while (b.length > 0) {
      answers.push(b.pop());
    }
  }
  while (number.length > 0) {
    answers.push(number.pop());
  }
  return answers;
}
function getPrimeNumbers(count) {
    let arr = [2];

    A: for (let i = 3; arr.length < count; i+=2) {
        for (let j = 3; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                continue A;
            }
        }
        arr.push(i);
    }
    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    const number = readLine().replace(/\s+$/g, '').split(' ').map(numberTemp => parseInt(numberTemp, 10));

    const result = waiter(number, q);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
