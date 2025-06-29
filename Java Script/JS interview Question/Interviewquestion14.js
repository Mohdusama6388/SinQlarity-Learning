function cancellable(fn,args,t){
    let id = setInterval(() => {
        fn(...args);
    },t);
    return function  (){
        clearInterval(id);
    };
}
const cancelTimeMs = 50;
function fiveTimes(x) {
    console.log(x * 5);
}
const cancelfn=cancellable(fiveTimes, [2], 20 );
setTimeout(cancelfn,cancelTimeMs);