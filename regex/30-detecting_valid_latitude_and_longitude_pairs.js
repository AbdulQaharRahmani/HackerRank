function processData(input) {
    //Enter your code here
    const regex = /\([-+]?(90(\.0+)?|[0-8]\d?)(\.\d+)?,\s[-+]?(180(\.0+)?|(1[0-7]\d)(\.\d+)?|(\d\d?)(\.\d+)?)\)/g;
    const arr = input.split("\n");
    
    for(let i = 1;i<arr.length;i++){
        const ans = arr[i].match(regex);
        if(ans){
            console.log("Valid");
        }else{
            console.log("Invalid");
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
