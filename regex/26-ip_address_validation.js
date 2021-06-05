function processData(input) {
    const arr = input.split("\n");
    const ipv6Regex = /([0-9a-f]{0,4}:){7}([0-9a-f]{0,4})$/g;
    const ipv4Regex = /^(\d{1,3}\.){3}\d{0,3}$/g;
    for(let i = 1;i<arr.length;i++){
        const ipv6 = arr[i].match(ipv6Regex);
        const ipv4 = arr[i].match(ipv4Regex);
        if(ipv6){
            console.log("IPv6");
        }else if(ipv4){
            if(validateNumber(ipv4[0])){
                console.log("IPv4");
            }else{
                console.log("Neither");
            }
        }else{
            console.log("Neither");
        }
    }
} 
function validateNumber(arr){
    arr = arr.split(".");
    for(let i = 0;i<arr.length;i++){
        const num = parseInt(arr[i]);
        if(num>255){
            return false;
        }
    }
    return true;
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
