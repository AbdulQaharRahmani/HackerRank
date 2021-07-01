function processData(input) {
    //Enter your code here
    const stack1 = [];
    const stack2 = [];
    const arr = input.split("\n");
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i].split(" ");
        if (temp[0] === '1') {
            stack1.push(temp[1]);
        } else if (temp[0] === '2') {
            if (stack2.length === 0) {
                emptyStack1(stack1, stack2);
            }
            stack2.pop();
        } else {
            if (stack2.length === 0)
                emptyStack1(stack1, stack2);
            console.log(stack2[stack2.length-1]);
        }
    }
}
function emptyStack1(stack1, stack2) {
    while (stack1.length !== 0) {
        stack2.push(stack1.pop());
    }
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
