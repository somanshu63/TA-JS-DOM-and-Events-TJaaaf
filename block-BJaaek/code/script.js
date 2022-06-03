let boxfirst = document.querySelector(".first");

boxfirst.addEventListener("click", function() {
    boxfirst.style.backgroundColor = random();
    function random() {
        rc = "#";
        for(let i = 0; i < 6; i++){
            rc += Math.floor(Math.random()*16).toString(16);
        }
        return rc;
    }
});

let boxsecond = document.querySelector(".second");

boxsecond.addEventListener("mousemove", function() {
    boxsecond.style.backgroundColor = random();
    function random() {
        rc = "#";
        for(let i = 0; i < 6; i++){
            rc += Math.floor(Math.random()*16).toString(16);
        }
        return rc;
    }
});