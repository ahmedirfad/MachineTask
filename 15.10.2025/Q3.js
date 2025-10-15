function totalChars(arr){
    let result=0;
    for(let x of arr){
        result+=x.length;
    }
    return result;
}
console.log(totalChars(["Hi","Bridgeon","JS"]));
console.log(totalChars(["Code","Your","Future"]));