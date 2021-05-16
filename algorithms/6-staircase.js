'use strict';

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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
     for(let i = 0; i<n;i++){
        for (let j = i+1; j<n;j++){
            process.stdout.write(" ");
        }
        for (let k = 0; k<=i;k++)
            process.stdout.write("#");
        // Putting Enter at end of line
        console.log();
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
