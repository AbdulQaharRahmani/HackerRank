function processData(input) {
    //Enter your code here
    const regex = /^[1-9]\d{4}\s((C)|(CPP)|(JAVA)|(PYTHON)|(PERL)|(PHP)|(RUBY)|(CSHARP)|(HASKELL)|(CLOJURE)|(BASH)|(SCALA)|(ERLANG)|(CLISP)|(LUA)|(BRAINFUCK)|(JAVASCRIPT)|(GO)|(D)|(OCAML)|(R)|(PASCAL)|(SBCL)|(DART)|(GROOVY)|(OBJECTIVEC))$/g;
    
    const arr = input.split("\n");
    for(let i = 1; i<arr.length;i++){
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
