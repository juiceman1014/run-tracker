const runContainer = document.getElementById("bodyContainer");
const addButton = document.getElementById("showDialog");
const runDialog = document.getElementById("addRunDialog");
const confirmBtn = runDialog.querySelector("#confirmBtn");



let myRuns = [];

function Run(date, distance, rpe, pr){
    this.date = date,
    this.distance = distance,
    this.rpe = rpe,
    this.pr = pr
}

function displayRun(){
    bodyContainer.innerHtml = "";
    for (let i = 0; i < myRuns.length; i++){
        const run = myRuns[i];

        const runDiv = document.createElement("div");
        runDiv.classList.add("run-card");
        runDiv.innerHtml = `
        <p>Date: ${run.date}</p>
        <p>Distance: ${run.distance}</p>
        <p>RPE: ${run.rpe}</p>
        <button class = "remove-btn" data-book-id="${i}">Remove Book</button>
        <input type="checkbox" class="pr-checkbox" data-book-id="${i}" ${run.pr ? 'checked' : ''}> PR
        `
    
        runContainer.appendChild(runDiv);
    }

    const checkboxes = document.querySelectorAll(".pr-checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            const runId = parseInt(event.target.dataset.runId, 10);
            myRuns[runIdId].read = event.target.checked;
            saveRunsToStorage();
        });
    });

}