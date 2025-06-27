function data(){
const fname=document.getElementById("namefirst").value ;
const lname=document.getElementById("namelast" ).value;
const email=document.getElementById("Email").value;
const mobileno=document.getElementById("contact").value;
const dob=document.getElementById("DOB" ).value;
const gender=document.getElementById("genderselect").value;
const age=document.getElementById("AGE").value;
const Fileupload=document.getElementById("Fileupload").value;
    if (fname==""|| lname=="" )
{    alert("enter first and last name ")
    return false;
    
     }
     if(email==""){
        alert("enter yo ur email")
        return false ;
     }
     if (Fileupload==""){
        alert("please  upload  a file")
        return false ;
     }
     if (mobileno.length<10 || mobileno.length>10)
     {
        alert("number should be 10 digit ,please enter valid number ");
         return false ;
     }
     else if (isNaN(mobileno))
   {
     alert ("only enter  integer number ")
        return false ;

     }
   else if (age<0||age>=110)
   {
   alert("please enter  a valid age")
    return false ;
     }
     if(dob==""){
        alert("Please fill your dob")
    return false ;
     }
   else if (gender == ""){
    alert("please choose your gender")
    return false ;
   }
 else{
alert("your detail has been successfully Register")
true
 }
    
 }




