import {adduserToDB,updateuserData} from '../models/user';
import {Request,Response} from 'express';
const registerUser=(req:Request,res:Response) =>{
    const username="usama";
    const password="123456";
    const age=21;
    const result = adduserToDB(username,password,age);
    res.send(result);
};
const checkTypeAndInterface =(req:Request,res:Response)=>{
    type lockedstate="locked"|"unlocked";
    let xstate:lockedstate="locked"
    const myUser={
    id : 1,
    Uname:"usama",
    password:"string",
    age:21,
    is_active:false,
     accountstatus:"it is"
    }
  const result=  updateuserData(myUser);
  res.send(result)
}
export {registerUser,checkTypeAndInterface};