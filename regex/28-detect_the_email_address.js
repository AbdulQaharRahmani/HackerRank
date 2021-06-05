function processData(input) {
    //Enter your code here
    const regex = /\S*@\w*?\.[a-zA-Z_]+(\.\w+){0,}/gi;
    const ans = input.match(regex);
    const mySet = new Set(ans.sort());
   
    const answer = Array.from(mySet).join(";");
    console.log(answer);
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
