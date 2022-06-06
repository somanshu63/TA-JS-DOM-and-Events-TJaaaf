let allbox = document.querySelector(".boxes");
let box = document.querySelector(".box");

for (let i = 0; i < 12; i++) {
    
    box[i] = allbox.children[i];

    box[i].addEventListener("click", function() {
        box[i].innerText = i + 1;
    });

}


let allbox2 = document.children[0].children[1].children[2].children[1].children[1];
let box2 = allbox2.querySelector(".box");

allbox2.addEventListener("click", function() {
    for (let j = 0; j < 12; j++) {
        box2[j] = allbox2.children[j];
        box2[j].innerText = j + 1;
    }
});