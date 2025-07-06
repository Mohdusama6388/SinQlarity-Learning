const arr =[1,5,6];
const newarr=arr.slice();
console.log("before-new arr",arr)
console.log("before-new arr",newarr)
arr[0]=8;
console.log("after-new arr",arr)
console.log("after-new arr",newarr)