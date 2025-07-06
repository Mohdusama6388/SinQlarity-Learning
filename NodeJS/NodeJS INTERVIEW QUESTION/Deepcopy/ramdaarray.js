const R =require("ramda")
const arr =[[1,5,6],[2,4,6],[2,3,5],[3,5,6]];
const newarr=R.clone(arr);
console.log("before-new arr",arr)
console.log("before-new arr",newarr)
arr[0][0]=11;
console.log("after-new arr",arr)
console.log("after-new arr",newarr)