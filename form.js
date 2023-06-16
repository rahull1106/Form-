function validation(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let dob = document.getElementById("dob").value;
  let location = document.getElementById("city").value;
  let checkboxes = document.querySelectorAll('[type="checkbox"]');
  let checked = false;
  let successmsg = document.getElementById("donemsg");
  let text;

  let form = document.getElementById("myform");
  let options = form.elements["myOption"];
  let selectedOption;
  let skills = [];

  let nameerror = document.getElementById("errorname");
  if (name == "") {
    text = "Enter  name";
    nameerror.innerHTML = text;

    return false;
  }

  if (!name.match(/^[A-Za-z`]/)) {
    text = "Enter Valid name";
    nameerror.innerHTML = text;
    return false;
  } else {
    nameerror.innerHTML = "";
  }

  let phonee = document.getElementById("errorphone");
  if (phone == "") {
    text = "Enter number";
    phonee.innerHTML = text;
    return false;
  } else if (isNaN(phone) || phone.length != 10) {
    text = "Enter valid Number";
    phonee.innerHTML = text;
    return false;
  } else {
    phonee.innerHTML = "";
  }

  let emaill = document.getElementById("errormail");
  if (email == "") {
    text = "Enter mail id";
    emaill.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Enter valid Email";
    emaill.innerHTML = text;
    return false;
  } else {
    emaill.innerHTML = "";
  }

  let dobs = document.getElementById("errordob");
  if (dob === "") {
    text = "Enter Date of birth";
    dobs.innerHTML = text;
    return false;
  } else {
    dobs.innerHTML = "";
  }

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = options[i].value;
      break;
    }
  }
  let gender = document.getElementById("errorgender");
  if (!selectedOption) {
    gender.innerHTML = "Enter Gender";
    return false;
  } else {
    gender.innerHTML = "";
  }

  let interest = document.getElementById("errorskills");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      skills.push(checkboxes[i].value);
    }
  }

  if (!checked) {
    text = "Select Your Skills";
    interest.innerHTML = text;
    return false;
  } else {
    interest.innerHTML = "";
  }

  let cityloc = document.getElementById("errorcity");
  if (location === "") {
    cityloc.innerHTML = "select skills";
    return false;
  } else {
    cityloc.innerHTML = "";
  }

  const data = {
    name: name,
    phone: phone,
    gender: selectedOption,
    skills: skills,
    email: email,
    location: location,
    dob: dob,
  };

  console.log(data);
  nameerror.style.padding = "10 px";

  form.reset();
  text = "Form Submitted successfully ";
  successmsg.innerHTML = text;

  return true;
}
