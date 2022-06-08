let form = document.querySelector("form");
let text = document.querySelector("#name");
let email = form.querySelector("#email");
let color = document.querySelector("#color");
let range = document.querySelector("#range");
let fiction = document.querySelector("#fiction");
let nonFiction = document.querySelector(`input[id="non-fiction"]`);
let adventure = document.querySelector("#adventure");
let terms = document.querySelector("#terms");
let modalData = document.querySelector(".modaldata");

let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    userInfo.name = form.elements.text.value;
    userInfo.color = form.elements.color.value;
    userInfo.email = form.elements.email.value;
    userInfo.range = form.elements.range.value;
    userInfo.youLove = form.elements.gender.value;
    userInfo.terms = form.elements.terms.checked;
    userInfo.bookGenre = form.elements.book.value;
    modal();
}

function modal() {
    form.style.display = "none";
    modalData.style.display = "block";
    modalData.style.fontWeight = "700"
    let name = document.createElement("p");
    name.innerText = `Hello ${userInfo.name}`;
    name.style.fontSize = "36px";
    let email = document.createElement("p");
    email.innerText = `Email: ${userInfo.email}`;
    let love = document.createElement("p");
    love.innerText = `You Love: ${userInfo.youLove}`;
    let color = document.createElement("p");
    color.innerText = `Color: ${userInfo.color}`;
    let rating = document.createElement("p");
    rating.innerText = `Rating: ${userInfo.range}`;
    let bookgenre = document.createElement("p");
    bookgenre.innerText = `${userInfo.bookGenre}`;
    let terms = document.createElement("p");
    terms.style.textDecoration = "underline";
    if(userInfo.terms == true){
        terms.innerText = `You agree to Terms and Conditions`;
    } else{
        terms.innerText = `You don't agree to Terms and Conditions`;
    }
    modalData.append(name, email, love, color, rating, bookgenre, terms);
}
let close = document.querySelector("a");
close.addEventListener("click", function() {
    form.style.display = "block";
    modalData.style.display = "none";
});

form.addEventListener("submit", handleSubmit);




