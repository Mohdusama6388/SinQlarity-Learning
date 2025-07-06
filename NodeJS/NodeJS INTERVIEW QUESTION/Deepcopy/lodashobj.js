const _ =require("lodash");
const obj ={a:1,b:2,c:3};
const newobj=_.cloneDeep(obj);;
console.log("before-new obj",obj)
console.log("before-new obj",newobj)
obj["a"]=8;
console.log("after-new obj",obj)
console.log("after-new obj",newobj)