function function1(){
    return new Promise((rej,res)=>{
        setTimeout(() => {
            return res("function1")
        },2000);
    
    })
        
    
}
function function2(){
    return new Promise((rej,res)=>{
        setTimeout(() => {
            return rej("function2-rejected")
        },1000);
    })
}  

function function3(){
    return new Promise((rej,res)=>{
        setTimeout(() => {
            return res("function3")
        },1000);

    })
}  
  Promise.all ([function1(),function2(),function3()]).then((result)=>{
    console.log(result)
  }).catch((error)=>console.log(error)
  )    
        