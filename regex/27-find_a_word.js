// i learned this solution from discussion part
function processData(input) {
    // Enter your code here
    const arr = input.split("\n");
    const sentenceSize = parseInt(arr[0]);
    let sentences = '';
    
    for (let i = 1;i<=sentenceSize;i++){
        sentences+=' '+arr[i];
    }
    
    for(let i = sentenceSize+2;i<arr.length;i++){
        const word = arr[i];
        let regex = "((?<=[\\W])|^)"+word+"((?=[\\W])|$)";
        regex = new RegExp(regex,"g");
        const ans = sentences.match(regex);
        if(ans){
            console.log(ans.length);
        }else{
            console.log(0);
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
