function processData(input) {
    //Enter your code here
    const regex = /^[h][i]\s[^d].*/i;
    const arr = input.split("\n");
    for(let i = 1;i<arr.length;i++){
        const ans = arr[i].match(regex);
        if(ans){
            console.log(ans[0]);
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
