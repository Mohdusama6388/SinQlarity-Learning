async function addtwonumber(promise1,promise2){
num1= await promise1;
num2= await promise2;
return num1+num2;
}
addtwonumber(Promise.resolve(2),Promise.resolve(3)).then((sum)=>{
    console.log("sum=",sum)

})

