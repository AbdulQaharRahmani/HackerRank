function processData(input) {
    //Enter your code here
    // this is what i learned from discussion
    let regex = /<a.*?href="(.*?)".*?>(.*?)<\/a>/gi;
    input.replace(regex,(_,link,content)=>{
        const text = content.replace(/(<.*?>)/g,'');
        console.log(link+","+text.trim());
    });
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
// my initial submit which passes nine test cases

// function processData(input) {
//     //Enter your code here
//     let array = input.split('\n');
//     let size = parseInt(array[0]);
//     array.shift(); // remove size from array
    
//     const regex = /(<a\s)[^<]*/g;
//     const linkRegex = /(?<=href=")[^"]*(?=")/;
//     const contentRegex = /(?<=>).*/
//     for(let str of array){
//         const aTag = str.match(regex);
//         if(aTag){   
//             for(let tag of aTag){
//                 const link = tag.match(linkRegex)[0];
//                 const content = tag.match(contentRegex)[0];
//                 console.log(link+","+content); 
//             }   
//         }

        
//     }
// } 

// notes
// Consider the input 101000000000100.
// Using 1.*1, * is greedy - it will match all the way to the end, and then backtrack until it can match 1, leaving you with 1010000000001.
// .*? is non-greedy. * will match nothing, but then will try to match extra characters until it matches 1, eventually matching 101.

