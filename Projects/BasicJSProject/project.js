

let my_user=null;
const red_block=document.getElementById("red_block");
const green_block=document.getElementById("green_block");
const blue_block=document.getElementById("blue_block");
const yellow_block=document.getElementById("yellow_block");

const user_input=document.getElementById("user_input");

const btn_adduser=document.getElementById("btn_adduser");
const btn_deleteuser=document.getElementById("btn_deleteuser");
const btn_movetored=document.getElementById("btn_movetored");
const btn_movetogreen=document.getElementById("add_movetogreen");
const btn_movetoblue=document.getElementById("add_movetoblue");
const btn_movetoyellow=document.getElementById("add_movetoyellow");

function adduserproject(){
    if(my_user==null){
        alert=("enter input");
my_user=document.createElement("div");
my_user.classname="my_user";
my_user.setAttribute("id","my_user");
my_user.innerHTML=user_input.value;
red_block.append(my_user);
user_input.disabled=true ;
btn_adduser.disabled=true;
  }
}
function deleteproject(){
    if (my_user!=null){
 my_user.remove();
user_input.disabled=false;
btn_adduser.disabled=false;
btn_deleteuser.disabled=true;
user_input.value="";
my_user=null;

    }

}
function movetoRed(){
if (my_user!=null){
    red_block.append(my_user);

   }
}
function movetogreen(){
    if (my_user!=null){
green_block.append(my_user) ;
    }
}
function movetoblue() {
if (my_user!=null){
    blue_block.append(my_user);
 }
}
function  movetoyellow(){
    if (my_user!=null){
        yellow_block.append(my_user);
    }
}
btn_adduser.addEventListener("click",adduserproject);
btn_deleteuser.addEventListener("click",deleteproject);
btn_movetored.addEventListener("click",movetoRed);
btn_movetogreen.addEventListener("click",movetogreen);
btn_movetoblue.addEventListener("click",movetoblue);
btn_movetoyellow.addEventListener("click",movetoyellow);