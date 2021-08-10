window.onload = fetchData();


async function fetchData() {
    await fetch("./projects.json")
    .then(response => response.json())
    .then((dataObj) => { loadChallenges(dataObj) });
}


function loadChallenges(dataObj) {
    const container = document.querySelector("section#challenges");
    const template = container.removeChild(document.querySelector("#item-template"));

    for(obj of dataObj) {
        let clone = template.cloneNode(true);
        let skillBlock = clone.querySelector(".card-body");

        clone.classList.remove("d-none");
        clone.querySelector("img").src = "./assets/challenges/" + obj.path + ".jpg";
        clone.querySelector("h5.card-title").innerText = obj.name;
        clone.querySelector(".view-code").href = "https://github.com/Pranav-Rustagi/frontendmentorChallenges/tree/main" + obj.path;
        clone.querySelector(".view-site").href = "./" + obj.path;

        for(tag of obj.skills) {
            let spanEl = document.createElement("span");
            spanEl.classList.add("badge", "bg-danger", "mx-1");
            spanEl.innerText = tag.toUpperCase();
            skillBlock.append(spanEl);
        }

        container.append(clone)
    }
}