const getname =async()=>{
throw new Error("something went wrong");

}
async function main(){
    try{
        const result=await getname();
        console.log("got the name",result)
    }
    catch(Error){
        console.log("exception handling block got error",Error.message)
    }
}
main();