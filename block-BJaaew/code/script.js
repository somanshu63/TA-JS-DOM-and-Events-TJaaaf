let rootTags = document.querySelector(".peoplehouses");
let search = document.querySelector("#text");
let rootUl = document.querySelector(".cards");

let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);

let allTags = got.houses.map((house) => house.name);

let activeHouse = "";

function createCustomUI(data = []) {
    rootUl.innerHTML = "";
    data.forEach((elm) => {
        let li =  document.createElement("li");
        li.classList.add("flex-30");
        let img = document.createElement("img");
        img.alt = elm.name;
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

function createTagsUI(tags = []) {
    rootTags.innerHTML = "";
    tags.forEach((tag) => {
        let li = document.createElement("li");
        li.innerText = tag;
        li.classList.add("customizedButton");

        if(activeHouse === tag) {
            li.classList.add("active");
        }

        li.addEventListener("click", () => {
            activeHouse = tag;
            let peopleOfTheHouse = 
            got.houses.find((house) => house.name === tag).people || [];
            createCustomUI(peopleOfTheHouse);
            createTagsUI(allTags);
        });
        rootTags.append(li);
    });
}

function handleSearch(event) {
    let searchText = event.target.value;
    let filteredPeople = allPeople.filter((p) => 
    p.name.toLowerCase().includes(searchText.toLowerCase()));
    createCustomUI(filteredPeople);
}

search.addEventListener("input", handleSearch);
createCustomUI(allPeople);
createTagsUI(allTags);