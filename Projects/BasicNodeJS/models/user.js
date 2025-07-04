const db=require('../util/Database');
module.exports.insert=async(userData)=>{
    let id =0;
    try{
    let query="INSERT INTO users (name,email,password,remark)  VALUES (?,?,?,?)";
    let result= await db.excute(query,[userData.name,userData.email,userData.password,userData.remark]);
    id=result[0].insertId;
} catch(error){
    console.log(error);
}
return id ;
}
module.exports.get=async(userData)=>{
    let retData='';
  try{
    let query="SElECT * FROM 'users'where id=?";
    let result=await db.execute(query,[userData.id])
    retData=result[0];
  } catch(error) {
console.log(error);
  }
  return retData;
}
module.exports.update=async(userData)=>{
    let retData='';
  try{
    let query="UPDATE `users` SET 'password'=? where id =?";
    await db.execute(query,[ userData.password,userData.id])
    return true;
  } catch(error) {
console.log(error);
  return false ;
  }
}
module.exports.delete=async(userData)=>{
  try{
    let query="DELETE FROM 'users'Where id=?";
    await db.execute(query,[ userData.password,userData.id])
    return true;
  } catch(error) {
console.log(error);
  return false ;
  }
}
