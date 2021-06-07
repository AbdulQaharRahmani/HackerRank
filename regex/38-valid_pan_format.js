function processData(input) {
    //Enter your code here
    const regex = /^[A-Z]{5}\d{4}[A-Z]$/g;
    const arr = input.split("\n");
    for(let i = 1;i<arr.length;i++){
        if(arr[i].match(regex)){
            console.log("YES");
        }else{
            console.log("NO");
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
