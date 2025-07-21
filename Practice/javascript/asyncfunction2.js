async function getname(flag=0){
if (flag===1){
    return "one"
}
else if (flag===2)
{
return "two"
 }
 else if(flag==="one")
    return "I got first promise"
} 
async function fetchdata() {
    
    const result1=await getname(1);
    const result2= await getname(result1);
    return (result1,result2);
}
async function main() {
    const result= await fetchdata()
    console.log(result.result1)
    console.log(result.result2)
    
}
main();

