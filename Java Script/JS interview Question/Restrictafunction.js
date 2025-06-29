function restrictmultiplecall(fn){
let iscallingfirsttime =true;
return function (...args){
    if(iscallingfirsttime){
        iscallingfirsttime=false;
        return fn (...args);
        
      }
          return undefined;
  };
  }
const myfunction=(n1,n2)=> n1+n2;
const myfunctiononlyoneallowed=restrictmultiplecall(myfunction);
console.log(myfunctiononlyoneallowed(2,3,));