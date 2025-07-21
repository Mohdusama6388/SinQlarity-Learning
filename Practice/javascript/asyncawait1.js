async function getname() {
    return "usama"
    
}
(async()=>{
    const name=await getname();
    console.log('my name is ',name)
})();