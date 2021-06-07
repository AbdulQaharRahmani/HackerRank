function processData(input) {
    //Enter your code here
    const regex=/^[a-z]{0,3}\d{2,8}[A-Z]{3,}$/g;
   const arr =  input.split("\n");
   for(let i = 1;i<arr.length;i++){
       if(arr[i].match(regex)){
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
