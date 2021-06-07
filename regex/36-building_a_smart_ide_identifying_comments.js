function processData(input) {
    //Enter your code here
    const regex = /(\/\/.*(?=\n))|(\/\*(\s|.)*?\*\/)/gi;
    const ans = input.match(regex);
    let res = '';
    for(let line of ans){
       const lastAnswer = line.split("\n").map(l=>l.trim()).join("\n");
       console.log(lastAnswer);
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
