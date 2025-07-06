let student={
sname:"usama",
mobileno:6388086156,

getName:function (){
    console.log(this.sname)
}

}
let sn =student.getName.bind(student);
setTimeout(sn,1000)