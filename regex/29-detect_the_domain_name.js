function processData(input) {
    //Enter your code here
    const regex = /(?<=http:\/\/|https:\/\/)([a-z0-9\-]*\.[a-z0-9\-]*)(\.[a-z0-9\-]*){0,}/g;
    
    let ans = input.match(regex);
    ans = ans.map(domain=>{
        const init = domain.substr(0,4);
        if(init==="www."){
            return domain.substr(4,domain.length);
        }else{
            return domain;
        }
    });
    
    const mySet = new Set(ans);
    const answer =  Array.from(mySet).sort().join(";");
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
