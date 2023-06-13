function validation(e) {
  e.preventDefault()
  let name = document.getElementById("name");
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let error_message = document.getElementById("error_message");
  let dob = document.getElementById("dob").value;
  let location = document.getElementById("city").value
  let text;
  let checkboxes=document.querySelectorAll('[type="checkbox"]')
  let checked = false;

  var form = document.getElementById("myform");
  var options = form.elements["myOption"];
  var selectedOption;
  let skills = [];

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = options[i].value;
      break;
    
    }
   
  }

  if (selectedOption) {
    console.log("Selected option: " + selectedOption);
   
  } else {
    console.log("No option selected");
    text = "Select gender";
    error_message.innerHTML = text;
    return false
  }



  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      skills.push(checkboxes[i].value)
    }
  }
  
  if (!checked) {
    text = "Select Your Skills";
    error_message.innerHTML = text;
    return false
  }
  console.log("skills",skills);
  const data = {
    name: name.value,
    phone: phone,
    gender:selectedOption,
    skills :skills,
    email: email,
    location:location,
    dob: dob,
  };

  console.log(data)
  error_message.style.padding = "10 px";

  if (name.length < 5) {
    text = "Enter valid name";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    text = "Enter valid Number";
    error_message.innerHTML = text;
    return false;
  }
  else{
    
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  
  form.reset()
  text = "Form Submitted successfully ";
    error_message.innerHTML = text;

  //     // return false
   return true;

//   // alert("Form submitted");
//   text = "Form Submitted successfully ";
//     error_message.innerHTML = text;
//     // return false
//   return true;
 }
// function submit() {
//   // console.log("sdadasd")

// }


