function timeConversion(s) {
    // Write your code here
    const isPm = s[s.length-2] === 'P';
    
    let hh = s.substring(0,2);
    let mm = s.substring(3,5);
    let ss = s.substring(6,8);
    
    if(isPm ){
        if(Number(hh)<12)
             hh = Number(hh)+ 12 + '';
    }
    else{
        if(Number(hh)===12)
             hh = '00'+ '';
    }
    return hh+':'+mm+':'+ss;
    
}
console.log(timeConversion('01:54:01AM'));