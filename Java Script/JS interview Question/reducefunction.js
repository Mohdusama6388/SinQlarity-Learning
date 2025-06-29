let nums=[2,3,4,5,5,6,6,]
let fn=function sum(accum,cur){
    return accum+cur
}
init=0;
console.log(nums.reduce(fn,init));
