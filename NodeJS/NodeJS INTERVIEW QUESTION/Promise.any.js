function function1(){
    return new Promise((rej,res)=>{
        setTimeout(() => {
        return rej("function1")
        },1000);
    
    })     
    
}
function function2(){
    return new Promise((rej,res)=>{
        setTimeout(() => {
            return rej("function2-rejected")
        },2000);
    })
}  

function function3(){
    return new Promise((rej,res)=>{
        setTimeout(() => {
            return rej("function3")
        },500);

    })
}  
  Promise.any([function1(),function2(),function3()]).then((result)=>{
    console.log(result)
  }).catch((error => console.log(error)
  ))
