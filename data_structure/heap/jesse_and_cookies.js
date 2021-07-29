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
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */
let heap = [];

function cookies(k, A) {
    // Write your code here
    A.forEach(num => {
        insert(num);
    });
    let count = 0;
    while (heap[0] < k) {
        const num1 = heap[0];
        let num2;
        if (heap.length < 3)
            num2 = heap[1];
        else
            num2 = heap[1] < heap[2] ? heap[1] : heap[2];

        deleteByIndex(0);
        deleteByIndex(0);

        const newNumber = num1 + 2 * num2;
        insert(newNumber);
        count++;
    }
    if (!heap[0])
        return -1;
    return count;
}


function insert(value) {
    heap.push(value);
    bubbleUp(heap.length - 1);
}
function deleteByIndex(index) {

    if (index === heap.length - 1) {
        heap.pop();
        return;
    }
    // Replace the value to be deleted with last value in heap
    let newValue = heap.pop();
    heap[index] = newValue;

    // Heapify
    bubbleUp(index);
    bubbleDown(index);
}

function bubbleDown(index) {
    while (index < heap.length) {
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;

        if (leftChild < heap.length) {
            if (rightChild < heap.length) {
                // Swap Parent with largest number
                index = swapWithSmallestChild(index, leftChild, rightChild);
            } else {
                index = swapWithSmallestChild(index, leftChild, Number.MAX_SAFE_INTEGER);
            }
        } else if (rightChild < heap.length) {
            // Swap Parent with largest number
            index = swapWithSmallestChild(index, Math.MAX_SAFE_INTEGER, rightChild);
        } else {
            index = heap.length;
        }
    }

}
function swapWithSmallestChild(parent, leftChild, rightChild) {
    // The arguments are indexes
    if (heap[parent] > heap[leftChild] || heap[parent] > heap[rightChild]) {
        if (heap[rightChild] < heap[leftChild]) {
            swap(parent, rightChild);
            return rightChild;
        } else {
            swap(parent, leftChild);
            return leftChild;
        }
    }
    return heap.length;
}
function bubbleUp(index) {
    let childIndex;
    let parentIndex = index;

    while (true) {
        childIndex = parentIndex;
        parentIndex = Math.floor((childIndex - 1) / 2);
        if (heap[parentIndex] > heap[childIndex]) {
            swap(parentIndex, childIndex);
        } else {
            break;
        }
    }
}
function swap(i, j) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

    const result = cookies(k, A);

    ws.write(result + '\n');

    ws.end();
}
