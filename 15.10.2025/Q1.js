function evenSum(arr){
    let sum=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]%2==0){
            sum+=arr[i];
        }
    }
    return sum;
}
console.log(evenSum([1,2,3,4,5]));
console.log(evenSum([7,9,12,14]));
console.log(evenSum([7,9,12,14]));
// ahmedirfAD