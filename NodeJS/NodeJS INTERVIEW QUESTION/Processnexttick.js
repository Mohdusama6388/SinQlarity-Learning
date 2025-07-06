function addtwonumber(callby,n1,n2){
    console.log(callby,":" ,n1+n2);
}
setImmediate(()=>{
    addtwonumber("setimmediate",14,78)
})
setTimeout(() => {
    
    addtwonumber("settimeout",10,30)
},0)
process.nextTick(()=>{
    addtwonumber(" process nextTick",70,78)
})

addtwonumber( "direct",40,49);



s