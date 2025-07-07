function multiplyby2(num,callback){
    callback(2*num);
}
multiplyby2(3,(result)=>{
    console.log(result);
});