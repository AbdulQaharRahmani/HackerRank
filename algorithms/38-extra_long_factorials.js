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
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
     let fact = '1';
    let answer =0;
    for(let i = 2; i<=n;i++){
        fact = multiply(fact,i+'');
    }
   console.log(fact);
}
function multiply(s1, s2) {
    let lastAnswer = '';
    
    for(let i = s1.length-1; i>=0;i--){
        let carry = 0;        
        let answer = '';
        for(let j = s2.length-1; j>=0;j--){
            let mul = carry + parseInt(s1.charAt(i)) * parseInt(s2.charAt(j));
            answer = (mul%10) + answer;
            carry = Math.floor(mul/10);
        }
        if(carry!==0){
            answer = carry + answer;
        }
        for(let k = s1.length-1; k >i;k-- ){
            answer = answer+'0';
        }
        lastAnswer = add(lastAnswer,answer);
    }
    return lastAnswer;
}

function add(s1, s2) {
    const max = s1.length >= s2.length ? s1 : s2;
    const min = s2.length > s1.length ? s1 : s2;

    let answer = '';
    let carry = 0;

    for (let i = max.length - 1, j = min.length - 1; i >= 0; i--, j--) {
        
        let sum = carry + parseInt(max.charAt(i)) + parseInt((j >= 0 ? min.charAt(j) : '0'));
        answer = (sum % 10) + answer;
        carry = Math.floor(sum / 10);
    }
    if(carry !==0){
        answer = carry + answer;
    }
    return answer;
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
