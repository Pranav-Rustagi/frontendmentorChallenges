window.onload = fetchData();

async function fetchData() {
    await fetch("./projects.json")
        .then(response => response.json())
        .then((dataObj) => { loadChallenges(dataObj) });
}


function loadChallenges(dataObj) {
    const container = document.querySelector("section#challenges");
    container.innerHTML = "";

    for (obj of dataObj) {
        const img_path = obj.name.toLowerCase().split(" ").join("-");
        const project_url = obj?.project_url || "#";
        const live_url = obj?.live_url || "#";

        let skillBlock = "";
        for (tag of obj.skills) {
            skillBlock += `<span class="badge mx-1 ${tag}" title="${tag.toUpperCase()}">${tag.toUpperCase()}</span>`;
        }

        let itemBlock = `<div class="col-10 col-sm-6 col-md-4 col-lg-3 mb-5 mb-md-3">
                            <div class="card shadow project-tile position-relative overflow-hidden border-0" title="${obj.name}">
                                <img src="./previews/${img_path}.jpg" class="card-img-top" alt="challenge image">
                                <div class="card-body text-center overlay position-absolute d-flex flex-column align-items-center justify-content-center">
                                    <br/>
                                    <div class="d-flex justify-content-around w-100 mt-3">
                                        <a href="${project_url}" class="btn btn-light btn-lg m-auto rounded-circle d-flex justify-content-center align-items-center p-3 mb-2 view-code" target="_blank" title="View code">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </a>
                                        <a href="${live_url}" class="btn btn-light btn-lg m-auto rounded-circle mb-2 d-flex justify-content-center align-items-center p-3 view-site" target="_blank" title="Preview site">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="mt-3 col-8">
                                        ${skillBlock}
                                    </div>
                                </div>
                            </div>
                        </div>`;

        container.innerHTML += itemBlock;
    }
}