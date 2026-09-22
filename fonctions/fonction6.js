function Fibonacci(x){
    if(x===0) return 0;
    if(x===1) return 1;
    let a=0, b=1
    for(i=2; i<=x; i++){
        const temp = a+b;
        a=b
        b=temp
    }
    return b
}
console.log(Fibonacci(7))