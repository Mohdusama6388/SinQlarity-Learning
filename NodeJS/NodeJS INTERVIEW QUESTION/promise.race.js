function function1(){
    return new Promise((rej,res)=>{
        setTimeout(() => {
        return res("function1")
        },1000);
    
    })     
    
}
function function2(){
    return new Promise((rej,res)=>{
        setTimeout(() => {
            return res("function2-rejected")
        },2000);
    })
}  

function function3(){
    return new Promise((rej,res)=>{
        setTimeout(() => {
            return res("function3")
        },500);

    })
}  
  Promise.race([function1(),function2(),function3()]).then((result)=>{
    console.log( "fullfilled",result)
  }).catch((error) =>{ console.log("Rejected",error)
  })