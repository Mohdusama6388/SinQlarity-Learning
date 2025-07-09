const adduserToDB = (username:string,password:string ,age:number)=>{
    console.log(username,password,age);
    return "user Registration done!"
}
// type lockedstate="locked"|"unlocked";

  interface User{
    id : number,
    Uname:string,
    password:string,
    age:number,
    is_active:true|false
    accountstatus:string|number
}
const updateuserData = (objUser:User)=>{
    console.log(objUser.Uname);
    return "Update done!";
};    
export {adduserToDB,updateuserData};