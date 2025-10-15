function countDigits(num){
    let i=1;
    let result=0;
    while(i<=num.length){
        result+=i;
        i++;
    }
    return i;
}
console.log(countDigits(12345));