const runContainer = document.getElementById("bodyContainer");
const addButton = document.getElementById("showDialog");
const runDialog = document.getElementById("addRunDialog");
const confirmBtn = runDialog.querySelector("#confirmBtn");

let myRuns = [];

function Run(date, distance, rpe, prStatus){
    this.date = date,
    this.distance = distance,
    this.rpe = rpe,
    this.pr = prStatus
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
        <button class = "remove-btn" data-run-id="${i}">Remove Run</button>
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

addButton.addEventListener("click", () =>{
    runDialog.showModal();
})

confirmBtn.addEventListener("click", (event) =>{
    event.preventDefault();

    const date = document.getElementById("date").value;
    const distance = document.getElementById("distance").value;
    const rpe = document.getElementById("rpe").value;
    const prStatus = document.getElementById("prStatus").checked;

    const newRun = new Run(date, distance, rpe, prStatus);
    myRuns.push(newRun);

    saveLibraryToStorage();
    runDialog.close();
    displayRun();
})

runContainer.addEventListener("click", (event) =>{
    const target = event.target;
    if (target.classList.contains("remove-btn")){
        const runIdToRemove = parseInt(target.dataset.runId, 10);
        console.log(`Removing run with ID: ${runIdToRemove}`);
        removeRunFromArray(runIdToRemove);
    }
})

function removeRunFromArray(runId){
    myRuns.splice(runId, 1);
    saveRunsToStorage;
    displayRun();
}