function validationForm(event) {
   event.preventDefault();
   const first_name = document.getElementById("fname1").value;
   const last_name = document.getElementById("lname").value;
   const Email_id = document.getElementById("Email").value;
   const Mobile_no = document.getElementById("Contact").value;
   const Date_of_birth = document.getElementById("DOB").value;
   const Select_gender = document.getElementsByName("gender").value;
   const Enter_age = document.getElementById("AGE").value;
   const File_upload = document.getElementById("Fileupload").value;
 console.log(first_name);
   if (first_name =="") {
      alert("please enter your first name.");
      return false;
   }

   if (last_name  == "") {
      alert("please enter your last name");
      return false;
   }


   if (Email_id  == "" || !Email_id .includes("@") || !Email_id .includes(".")) {
      alert("please enter your valid email");
      return false;
   }
   if (File_upload == "") {
      alert("please  upload  a file");
      return false;
   }
   if (Mobile_no == "" || !/^\d{10}$/.test(Mobile_no)) {
      alert("number should be 10 digit ,please enter valid number ");
      return false;

   }
   if (Enter_age < 0 || Enter_age >= 110) {
      alert("please enter valid age ");
      return false;
   }
   if (Date_of_birth == "") {
      alert("Please fill your dob")
      return false;
   }
    if (Select_gender == "") {
      alert("please choose your gender");
      return false;
   }
   else {
      alert("form submitted successfully !");
      return true;
   }
 }
 const user_form = document.getElementById("user_form");
 user_form.addEventListener("submit",validationForm);


