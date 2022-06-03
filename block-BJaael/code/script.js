let allbox = document.querySelector(".allboxes");
allbox.classList.add("flex");
let div = document.createElement("div");
let boxcolor = document.querySelector(".box");

for (let i = 0; i < 500; i++) {
div[i] = document.createElement("div");
div[i].classList.add("box");
allbox.append(div[i]);
let boxcolor = document.querySelector(".box");

boxcolor[i] = document.children[0].children[1].children[1].children[i];

allbox.addEventListener("mousemove", function() {
    boxcolor[i].style.backgroundColor = random();
    function random() {
        rc = "#";
        for(let i = 0; i < 6; i++){
            rc += Math.floor(Math.random()*16).toString(16);
        }
        return rc;
    }
    boxcolor[i].innerText = randomText();
    function randomText () {
        let rt = 0;
        rt += Math.floor(Math.random()*500);
        return rt;
    }
});
}


