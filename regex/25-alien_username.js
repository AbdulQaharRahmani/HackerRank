function processData(input) {
    //Enter your code here
    const arr = input.split("\n");
    const regex = /^[_\.]\d+[a-zA-Z]*_?$/g;
    for(let i = 1;i<arr.length;i++){
        const isValid = arr[i].match(regex);
        if(isValid){
            console.log("VALID");
        }else{
            console.log("INVALID");
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
