let calculator = document.querySelector(".calci");
let clear = calculator.querySelector(".Clear");
let equal = calculator.querySelector(".equal");
let numA = calculator.querySelector(".numa");
let numB = calculator.querySelector(".numb");
let Operator = calculator.querySelector(".operator");
let Operations = calculator.querySelectorAll(".operations li");
let Numbers = calculator.querySelectorAll(".numbers li");
let Numbers2 = calculator.querySelectorAll(".numbers li");
let result = calculator.querySelector(".result");

let firstnumber = "";
    Numbers.forEach((num) => {
        num.addEventListener("click", (event) =>  {
            firstnumber = firstnumber + event.target.innerText.toString();
            numA.innerText = +(firstnumber);
        });
    });    

    

    Operations.forEach((op) => {
        op.addEventListener("click", (event) => {
            Operator.innerText = event.target.innerText;
        });
    });    

    let secondnumber = "";

    Numbers2.forEach((num2) => {
        num2.addEventListener("click", (event) => {
            secondnumber = secondnumber + event.target.innerText.toString();
            numB.innerText = +(secondnumber);
        });
    });    

   

    clear.addEventListener("click", function() {
        numA.innerText = "";
        numB.innerText = "";
        Operator.innerText = "";
        result.innerText = "";
        secondnumber = "";
        firstnumber = "";
    });


    function calculate(){
        if(Operator.innerText == `+`) {
            result.innerText =  +(numA.innerText) + +(numB.innerText);
        }
        else if(Operator.innerText == `-`){
            result.innerText =  numA.innerText - numB.innerText;
        }
        else if(Operator.innerText == `*`){
            result.innerText =  numA.innerText * numB.innerText;
        }
        else if(Operator.innerText == `%`){
            result.innerText =  numA.innerText / numB.innerText;
        }
        return result.innerText;
    }
    

    let final = 0;
    equal.addEventListener("click", function() {
        final = calculate();        
        numA.innerText = "";
        numB.innerText = "";
        Operator.innerText = "";
    });


