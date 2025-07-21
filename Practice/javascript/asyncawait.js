async function getname(){
return "usama abbasi"
}

 async function main(){
    const Name = await getname();
    

    console.log("my name is ",Name)
 }
main();