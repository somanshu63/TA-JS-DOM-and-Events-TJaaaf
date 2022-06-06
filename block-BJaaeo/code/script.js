let calculator = document.querySelector(".calci");
let clear = calculator.querySelector(".Clear");
let equal = calculator.querySelector(".equal");
let Operations = calculator.querySelectorAll(".operations li");
let Numbers = calculator.querySelectorAll(".numbers li");
let display = calculator.querySelector(".display");

   


    Numbers.forEach((num) => {
        num.addEventListener("click", (event) => {
                display.innerText += event.target.innerText;
        });
    });
    Operations.forEach((num) => {
        num.addEventListener("click", (event) => {
            display.innerText += event.target.innerText;
        });
    });

    clear.addEventListener("click", function() {
        display.innerText = "";
    });

    equal.addEventListener("click", function() {
        display.innerText =  eval(display.innerText);
    });


