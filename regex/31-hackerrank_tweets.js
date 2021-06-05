function processData(input) {
    //Enter your code here
    let arr = input.split("\n");
    const regex = /hackerrank/gi;
    let count = 0;
    for(let i =1;i<arr.length;i++){
        if(arr[i].match(regex)){
            count++;
        }
    }
    console.log(count);
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
