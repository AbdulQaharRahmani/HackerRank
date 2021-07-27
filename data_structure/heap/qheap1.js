let heap = [];
function processData(input) {
    //Enter your code here
    const arr = input.split("\n");
    for (let i = 1; i < arr.length; i++) {
        let str = arr[i].split(" ");

        switch (str[0]) {
            case '1': // add a value 
                insert(Number.parseInt(str[1]));
                break;
            case '2':
                deleteValue(Number.parseInt(str[1]));
                break;
            case '3':
                console.log(heap[0]);
        }
    }
}
function insert(value) {
    heap.push(value);

    bubbleUp(heap.length - 1);
}
function deleteValue(value) {
    let index = 0;
    while (heap[index] !== value)
        index++;

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
    temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
