function* getnum(index){
    while(index<5){
        yield index
        index++;
    }

};
let it =getnum(0);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value.done);


