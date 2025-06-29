const arr= [1,2];
Array.prototype.dublicator=function(){
    return[...this,...this];

};
console.log(arr.dublicator());