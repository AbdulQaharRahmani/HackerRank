function processData(input) {
    //Enter your code here
    const arr = input.split("\n");
    const sentenceSize = parseInt(arr[0]);
    let sentences = '';
    for (let i = 1;i<=sentenceSize;i++){
        sentences+=' '+arr[i];
    }
    // solving for all queries
    for (let i = sentenceSize+2;i<arr.length;i++){
        const query = arr[i];  
        let regexString = `([a-zA-Z_0-9]+${query}[A-Za-z_0-9]+?)`;
        let regex = new RegExp(regexString,'gi');
        const ans = sentences.match(regex);
        
        if(ans){
            console.log(ans.length);
        }   
        else{
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
