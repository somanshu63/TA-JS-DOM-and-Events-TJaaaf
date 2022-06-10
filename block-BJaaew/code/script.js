let root = document.querySelector(".peopleroot");
let peoplehouses = document.querySelector(".peoplehouses");
let input = document.querySelector("#text");
let rootUl = document.querySelector("ul");
let allButton = peoplehouses.querySelectorAll("button");

peoplehouses.classList.add("flex", "houses");
input.addEventListener("keyup", (event) => {
    if(event.keycode == 13 || event.target.value !== ""){
        rootUl.innerHTML = "";
        let newarray = [];
        for (let k = 0; k < 11; k++) {
            newarray.push(got.houses[k].people.filter((elm) => elm.name.includes(event.target.value)));
        }
        newarray.forEach((elm) => {
            createCustomUI(elm);
        });
    } else{
        createUI();
    }
}
);

    got.houses.forEach((element, index) => {
        let button = document.createElement("button");
        button.innerText = element.name;
        button.setAttribute("data-id", index);
        button.classList.add("customizebuttons")
        peoplehouses.append(button);
});


let button0 = peoplehouses.querySelector(`button[data-id="0"]`);
let button1 = peoplehouses.querySelector(`button[data-id="1"]`);
let button2 = peoplehouses.querySelector(`button[data-id="2"]`);
let button3 = peoplehouses.querySelector(`button[data-id="3"]`);
let button4 = peoplehouses.querySelector(`button[data-id="4"]`);
let button5 = peoplehouses.querySelector(`button[data-id="5"]`);
let button6 = peoplehouses.querySelector(`button[data-id="6"]`);
let button7 = peoplehouses.querySelector(`button[data-id="7"]`);
let button8 = peoplehouses.querySelector(`button[data-id="8"]`);
let button9 = peoplehouses.querySelector(`button[data-id="9"]`);
let button10 = peoplehouses.querySelector(`button[data-id="10"]`);

let emptyarray = [];

button0.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        createCustomUI(emptyarray);
    createCustomUI(got.houses[id].people);
}

button1.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}

button2.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}

button3.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}

button4.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}

button5.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}

button6.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}

button7.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}

button8.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}

button9.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}

button10.addEventListener("click", handleButton0);
function handleButton0(event) {
    let id = event.target.dataset.id;
        active(id);
        rootUl.innerHTML = "";
        createCustomUI(got.houses[id].people);
}


function active(id) {
    button0.classList.remove("active");
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.remove("active");
    button5.classList.remove("active");
    button6.classList.remove("active");
    button7.classList.remove("active");
    button8.classList.remove("active");
    button9.classList.remove("active");
    button10.classList.remove("active");

    if(id == 0){
        button0.classList.add("active");
    }
    else if(id == 1){
        button1.classList.add("active");
    }
    else if(id == 2){
        button2.classList.add("active");
    }
    else if(id == 3){
        button3.classList.add("active");
    }
    else if(id == 4){
        button4.classList.add("active");
    }
    else if(id == 5){
        button5.classList.add("active");
    }
    else if(id == 6){
        button6.classList.add("active");
    }
    else if(id == 7){
        button7.classList.add("active");
    }
    else if(id == 8){
        button8.classList.add("active");
    }
    else if(id == 9){
        button9.classList.add("active");
    }
    else if(id == 10){
        button10.classList.add("active");
    }
}

function createCustomUI(arr) {
    arr.forEach((elm) => {
        let li =  document.createElement("li");
        li.classList.add("flex-30");
        let img = document.createElement("img");
        img.src = elm.image;
        let h3 = document.createElement("h3");
        h3.innerText = elm.name;
        let p = document.createElement("p");
        p.innerText = elm.description
        let a = document.createElement("a");
        a.classList.add("custombutton");
        a.href = elm.wikilink;
        a.innerText = "know more!";
        li.append(img, h3, p, a);
        rootUl.append(li);
    });
}


function createUI (array = got.houses) {
array.forEach((element) => {
    element.people.forEach((elm) => {
        let li =  document.createElement("li");
        li.classList.add("flex-30");
        let img = document.createElement("img");
        img.src = elm.image;
        let h3 = document.createElement("h3");
        h3.innerText = elm.name;
        let p = document.createElement("p");
        p.innerText = elm.description
        let a = document.createElement("a");
        a.classList.add("custombutton");
        a.href = elm.wikilink;
        a.innerText = "know more!";
        li.append(img, h3, p, a);
        rootUl.append(li);
    });
});
}
createUI();

