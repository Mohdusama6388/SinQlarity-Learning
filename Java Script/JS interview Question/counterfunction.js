function createcount(count){
return function (){
        return count++;
    };
};
const value=createcount(40);
console.log(value());
console.log(value());
console.log(value());