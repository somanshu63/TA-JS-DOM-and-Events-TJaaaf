let root = document.querySelector("ul");
let input = document.querySelector("#text");
let controls = document.querySelector(".controls");
let itemsLeft = document.querySelector(".itemsLeft");
let clearCompleted = document.querySelector(".clearCompleted");
let All = document.querySelector(".All");
let Active = document.querySelector(".Active");
let Completed = document.querySelector(".Completed");
let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

controls.style.display = "none";

function handleInput(event){
    let value = event.target.value;
    if(event.keyCode === 13 && value !== ""){
        let todo = {
            name: value,
            isDone: false,
        };
        allTodos.push(todo);
        event.target.value = "";

        createUI(allTodos, root);
    } 
    controls.style.display = "flex";

    localStorage.setItem(
        "todos", 
        JSON.stringify(allTodos)
    );
    
    itemsLeft.children[0].innerText = allTodos.filter((todo) => todo.isDone == false).length;
    
    clearCompleted.addEventListener("click", handleClearCompleted);
    All.addEventListener("click", handleAll);
    Active.addEventListener("click", handleActive);
    Completed.addEventListener("click", handleCompleted);


}

input.addEventListener("keyup", handleInput);


function handleAll() {
    allTodos = allTodos;
    createUI(allTodos, root);

}


function handleActive() {
    let activeTodos = allTodos.filter((todo) => todo.isDone == false);
    createUI(activeTodos, root);

}


function handleCompleted() {
    let completedTodos = allTodos.filter((todo) => todo.isDone == true);
    createUI(completedTodos, root);

}

function handleClearCompleted() {
    allTodos = allTodos.filter((todo) => todo.isDone == false);
    localStorage.setItem(
        "todos", 
        JSON.stringify(allTodos)
        );
    createUI(allTodos, root);
}

function handleDelete(event) {
    let id = event.target.dataset.id;
    allTodos.splice(id, 1);
    localStorage.setItem(
        "todos", 
        JSON.stringify(allTodos)
        );
        createUI(allTodos, root);
        itemsLeft.children[0].innerText = allTodos.filter((todo) => todo.isDone == false).length;


}
 function handleToggle(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
    localStorage.setItem(
        "todos", 
        JSON.stringify(allTodos)
        );
        createUI(allTodos, root);
        itemsLeft.children[0].innerText = allTodos.filter((todo) => todo.isDone == false).length;

 }

function createUI(data, rootElm) {
    rootElm.innerHTML = "";
    data.forEach((todo, index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.name = "checkbox";
        input.type = "checkbox";
        input.addEventListener("input", handleToggle);
        input.setAttribute("data-id", index);
        input.id = "checkbox";
        input.checked = todo.isDone;
        let p = document.createElement("p");
        p.innerText = todo.name;
        let span = document.createElement("span");
        span.innerText = "X";
        span.setAttribute(`data-id`, index);
        span.addEventListener("click", handleDelete);
        li.classList.add("flex");
        li.append(input, p, span);
        rootElm.append(li);
    });
}

