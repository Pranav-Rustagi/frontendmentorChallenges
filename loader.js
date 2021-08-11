window.onload = fetchData();


async function fetchData() {
    await fetch("./projects.json")
    .then(response => response.json())
    .then((dataObj) => { loadChallenges(dataObj) });
}


function loadChallenges(dataObj) {
    const container = document.querySelector("section#challenges");
    container.innerHTML = "";

    for(obj of dataObj) {

        let path = obj.name.toLowerCase().split(" ").join("-");
        let skillBlock = "";

        for(tag of obj.skills) {
            skillBlock += `<span class="badge bg-danger mx-1">${tag.toUpperCase()}</span>`;
        }

        let itemBlock = `<div class="col-10 col-sm-6 col-md-4 col-lg-3 mb-5 mb-md-3">
                            <div class="card shadow">
                                <img src="./${path}/design/desktop-preview.jpg" class="card-img-top" alt="challenge image">
                                <div class="card-body text-center">
                                    <h5 class="card-title mt-2 mb-4 fw-bold">${obj.name}</h5>
                                    <a href="https://github.com/Pranav-Rustagi/frontendmentorChallenges/tree/main/${path}" class="btn btn-dark d-block col-10 m-auto rounded-pill mb-2 view-code" target="_blank">View code</a>
                                    <a href="./${path}" class="btn btn-dark d-block col-10 m-auto rounded-pill mb-2 view-site" target="_blank">Visit live site</a>
                                    <br>
                                    ${skillBlock}
                                </div>
                            </div>
                        </div>`;

        container.innerHTML += itemBlock;
    }
}