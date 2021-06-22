function processData(input) {
    //Enter your code here
    let arr = input.split("\n");
    let stack = [''];
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i].split(" ");
        const latestString = stack[stack.length-1];
        switch (temp[0]) {
            case '1':
                stack.push(latestString + temp[1]); 
                break;
            case '2':
                const amount = Number.parseInt(temp[1]);
                stack.push(latestString.substr(0, latestString.length - amount));
                break;
            case '3':
                const index = Number.parseInt(temp[1])-1;
                console.log(latestString.charAt(index));
                break;
            case '4':
                stack.pop();
                break;
        }
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
