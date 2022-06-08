let form = document.querySelector("form");

let errorMessages = {};

function displayError(name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessages[name];
    elm.classList.add("error");
}

function displaySuccess(name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    elm.classList.remove("error");
    elm.classList.add("success");
}

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    let username = elements.username.value;
    let name = elements.name.value;
    let email = elements.email.value;
    let phone = elements.phone.value;
    let password = elements.password.value;
    let passwordCheck = elements.passcheck.value;

    if(username.length < 4){
        errorMessages.username = `username can't be less than four characters`;
        displayError("username");
    } else{    
        displaySuccess("username");
    }

    if(!isNaN(name)) {
        errorMessages.name = "you can't use number in the name field";
        displayError("name");
    } else{    
        displaySuccess("name");
    }

    if (!email.includes("@")) {
        errorMessages.email = "not a valid email";
        displayError("email");
    }else if(email.length < 6){    
       errorMessages.email = "email must have 6 characters";
        displayError("email");
    } else{
        displaySuccess("email");
    }


    if (isNaN(phone)) {
        errorMessages.phone = "not a valid email";
        displayError("phone");
    }else if(phone.length < 7){    
       errorMessages.phonne = "email must have 6 characters";
        displayError("phone");
    } else{
        displaySuccess("phone");
    }


    if(password !== passwordCheck){
        errorMessages.password = "password dont match";
        errorMessages.passwordCheck = "both password should be same";
        displayError("password");
        displayError("passwordCheck");
    } else{    
        displaySuccess("password");
        displaySuccess("passwordCheck");
    }

        if( phone.length < 7 
             || username.length < 4
             || isNaN(phone)
             || isNaN(name)
             || !email.value.includes("@") 
             || email.value.length < 6
             || password !== passwordCheck){

             } else {
                button.previousElementSibling.innerText = "user added successfully!";
             }
}

form.addEventListener("submit", handleSubmit);


  