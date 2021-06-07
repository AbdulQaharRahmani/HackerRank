function processData(input) {
    //Enter your code here
    const arr = input.split("\n");
    const arrSize = parseInt(arr[0]);
    const begin = /^hackerrank/gi;
    const end = /hackerrank$/gi;
    
    for(let i = 1;i<=arrSize;i++){
        if(arr[i].match(begin) && arr[i].match(end)){
            console.log(0);
        }else if(arr[i].match(begin)){
            console.log(1);
        }else if(arr[i].match(end)){
            console.log(2);
        }else{
            console.log(-1);
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
