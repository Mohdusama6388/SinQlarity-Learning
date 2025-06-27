function printname(){

    if( Array.from(arguments).indexof (2) >= 0  ){
        console.log("yes 2 is passed to this function");
    } else{
        console.log("no 2 is passed to this function");
    }
}
printname(2);