function createaHelloworld(){
    return function (){
        return "Hello world";

    }
} 
const newfunction=createaHelloworld();
let value=newfunction();
console.log(value);
