'use strict';
// only works for 7 test cases
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
 * Complete the 'arrayAndQueries' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY A
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayAndQueries(A, queries) {
    // Write your code here
    const sortedArray = A.slice().sort((a, b) => a - b);
    let count = 0;

    for (let i = 1; i <= queries.length; i++) {
        // query index
        const queryIndex = queries[i - 1][0] - 1;// -1 because indexing starts at 1
        const queryNum = queries[i - 1][1];
        // findIndex in sorted Array
        // use binary search because array is sorted
        const index = binarySearch(sortedArray, 0, sortedArray.length, A[queryIndex]);
        sortedArray[index] = queryNum;
        A[queryIndex] = queryNum;
        // use bubble sort becuase only one element is not sorted in array
        bubbleSort(sortedArray);
        count += i * subsequence(sortedArray);
    }
    return count;

}
function binarySearch(arr, start, end, num) {
    const middle = Number.parseInt((start + end) / 2);
    if (arr[middle] === num) {
        return middle;
    } else if (start === end) {
        return -1;
    }
    else if (num > arr[middle]) {
        return binarySearch(arr, middle + 1, end, num);
    } else {
        return binarySearch(arr, start, middle - 1, num);
    }
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let changed = false;
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                changed = true;
            }
        }

        if (!changed) {
            return;
        }
    }
}
function subsequence(array) {
    const tempArray = {

    };

    for (let num of array) {
        if (tempArray[num - 1]) {
            if (tempArray[num - 1].length == 1) {
                delete tempArray[num - 1];
            } else {
                tempArray[num - 1].pop();
            }
        }
        
        if (tempArray[num])
            tempArray[num].push(true);
        else
            tempArray[num] = [true];
    }
    
    let count = 0;
    const keys = Object.keys(tempArray);
    
    for(let key of keys){
        count+= tempArray[key].length;
    }
    return count;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = arrayAndQueries(A, queries);

    ws.write(result + '\n');

    ws.end();
}
