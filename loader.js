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
        const img_path = obj.name.toLowerCase().split(" ").join("-");
        const project_url = obj?.project_url || "#";
        const live_url = obj?.live_url || "#";
        
        let skillBlock = "";
        for(tag of obj.skills) {
            skillBlock += `<span class="badge bg-danger mx-1">${tag.toUpperCase()}</span>`;
        }

        let itemBlock = `<div class="col-10 col-sm-6 col-md-4 col-lg-3 mb-5 mb-md-3">
                            <div class="card shadow">
                                <img src="./previews/${img_path}.jpg" class="card-img-top" alt="challenge image">
                                <div class="card-body text-center">
                                    <h5 class="card-title mt-2 mb-4 fw-bold">${obj.name}</h5>
                                    <a href="${project_url}" class="btn btn-dark d-block col-10 m-auto rounded-pill mb-2 view-code" target="_blank">View code</a>
                                    <a href="${live_url}" class="btn btn-dark d-block col-10 m-auto rounded-pill mb-2 view-site" target="_blank">Visit live site</a>
                                    <br>
                                    ${skillBlock}
                                </div>
                            </div>
                        </div>`;

        container.innerHTML += itemBlock;
    }
}