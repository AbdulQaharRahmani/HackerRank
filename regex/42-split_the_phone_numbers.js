function processData(input) {
    //Enter your code here
    let answer = '';
    const regex = /(\d+)?[- ](\d{1,3})[- ](\d{4,10})/g;
    const arr = input.split("\n");
    for(let i = 1 ;i<arr.length;i++){
        arr[i].replace(regex,(_,countryCode,localCode,number)=>{
            answer += 'CountryCode='+countryCode+",LocalAreaCode="+localCode+",Number="+number+"\n";
        });
    }
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
