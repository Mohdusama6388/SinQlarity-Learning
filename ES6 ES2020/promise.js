function updateage(){
return new Promise ((resolve,reject)=>{
    if (age >0){
        age=age+1;
        resolve(age)
    }else{
        throw new Error ("Invalid age");
    }
})
}
updateage(-7)
.then((updateage)=> {
    console.log("update age is ",updateage);

})
.catch((err)=> {
    console.log("err: age is not updated ")

})