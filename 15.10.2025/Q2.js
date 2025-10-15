function countDigits(num){
    let str=num.toString();
    let i=1;
    let count=0;
    while(i<=str.length){
        count++;
        i++;
    }
    return count;
}
console.log(countDigits(12345));
console.log(countDigits(987654321));