Array.prototype.last=function(){
if(this.length){
   return this[this.length -1];
}
};
const arr=[12,14,65];
console.log(arr.last());