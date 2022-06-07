let form = document.querySelector("form");
let button = document.querySelector("button");

function handleSubmit(event) {
    event.preventDefault();

    let usernameElm = event.target.elements.username;
    let nameElm = event.target.elements.name;
    let emailElm = event.target.elements.email;
    let phoneElm = event.target.elements.phone;
    let passwordElm = event.target.elements.password;
    let confirmPasswordElm = event.target.elements.confirm-password;

    if(usernameElm.value.length < 4){
        usernameError = `username can't be less than four characters`;
        usernameElm.nextElementSibling.innerText = usernameError;
        usernameElm.classList.add("error");
    } else{    
    usernameElm.nextElementSibling.innerText = "";
    usernameElm.classList.remove("error");
    usernameElm.classList.add("success");
}

    if(stringContainsNumber(nameElm.value) == true){
        nameError = "you can't use number in the name field";
        nameElm.nextElementSibling.innerText = nameError;
        nameElm.classList.add("error");
    } else{    
        nameElm.nextElementSibling.innerText = "";
        nameElm.classList.remove("error");
        nameElm.classList.add("success");
    }

    if (!emailElm.value.includes("@") || emailElm.value.length < 6) {
        emailError = "not a valid email";
        emailElm.nextElementSibling.innerText = emailError;
        emailElm.classList.add("error");
    }else{    
        emailElm.nextElementSibling.innerText = "";
        emailElm.classList.remove("error");
        emailElm.classList.add("success");
    }


    if(phoneElm.value.length < 7 ){
        phoneError = "phone number can contain only numbers";
        phoneElm.nextElementSibling.innerText = phoneError;
        phoneElm.classList.add("error");
    } else{    
        phoneElm.nextElementSibling.innerText = "";
        phoneElm.classList.remove("error");
        phoneElm.classList.add("success");
    }


    if(passwordElm.value != confirmPasswordElm.value){
        passwordError = "password dont match";
        passwordElm.classList.add("error");
    } else{    
        passwordElm.nextElementSibling.innerText = "";
        passwordElm.classList.remove("error");
        passwordElm.classList.add("success");
    }

        if( phoneElm.value.length < 7 
             || usernameElm.value.length < 4
             || stringContainsNumber(nameElm.value) == true
             || !emailElm.value.includes("@") 
             || emailElm.value.length < 6){

             } else {
                button.previousElementSibling.innerText = "user added successfully!";

             }
}

form.addEventListener("submit", handleSubmit);


function stringContainsNumber(_input){
    let string1 = String(_input);
    for( let i = 0; i < string1.length; i++){
        if(!isNaN(string1.charAt(i)) && !(string1.charAt(i) === " ") ){
          return true;
        }
    }
    return false;
  }