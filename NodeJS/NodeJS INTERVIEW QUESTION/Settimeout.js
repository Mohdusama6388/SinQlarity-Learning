function addtwonumber(callby,n1,n2){
console.log(callby,":",n1+n2)
}
setImmediate(()=> {
    addtwonumber("setImmediate :",2,4);
})
setTimeout(() => {
    addtwonumber("setTimeout :",5,4)
},0);
addtwonumber("direct",5,8);
