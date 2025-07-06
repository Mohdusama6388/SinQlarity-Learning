const getname=async()=>{
    throw new Error("something went wrong")
};
async function main() {
    try{
  const name  =await getname()
  console.log("got the name",name)
}catch(error){
    console.log("Exception handling block - get error",error.message)
}
}
main();