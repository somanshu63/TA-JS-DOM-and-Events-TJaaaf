let watchList = document.querySelector("form");


function handleSubmit(event){
        event.preventDefault();
        
        let elements = event.target.elements;
        const moviename = elements.name.value;
        elements.name.value = "";
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let input = document.createElement("input");
        input.name = "checkbox";
        input.type = "checkbox";
        input.id = "checkbox";
        let label = document.createElement("label");
        label.for = "checkbox";
        label.innerText = moviename;
        let img = document.createElement("img");
        img.src = "X.svg.png";
        let hr = document.createElement("hr");
        hr.style.border = "1px dashed white";
        div2.classList.add("flex");
        div2.append(input, label, img);
        div.classList.add("movies");
        div.append(hr, div2);
        watchList.append(div);

        img.addEventListener("click", function() {
            img.parentElement.parentElement.remove();
        });

}


watchList.addEventListener("submit", handleSubmit);

