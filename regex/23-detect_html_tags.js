function processData(input) {
    //Enter your code here
     
    const regex = /(?<=<\s*)[\w]+(?=\s*)/gi;
    let ans = input.match(regex);
    const mySet = new Set(ans.sort());
    ans = Array.from(mySet);
    
    console.log(ans.join(';'));
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
  
