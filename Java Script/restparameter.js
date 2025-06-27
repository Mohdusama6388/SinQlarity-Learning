function addnumber(){
   let  sum=0;
    for(let index=0;index<arguments.length;index++){
    const element=arguments[index];
    sum=sum+element;
}
console.log(sum);
}

addnumber(2,4,5,6);
addnumber(2,45,6,);