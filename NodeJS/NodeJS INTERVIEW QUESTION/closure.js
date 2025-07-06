const powergeneratefunction=(power)=>{
    return (number)=>{
    return power**number ;
    }
}
const square=powergeneratefunction(2);
const quard=powergeneratefunction(4);
const cube =powergeneratefunction(3);
console.log(square(3));
console.log(cube(4));
console.log(quard(5));