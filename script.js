const gridBox = document.getElementById("grid-box");
document.getElementById("reset").addEventListener("click", function() {resetGrid()});
createGrid(16);


gridBox.addEventListener("mousemove", function(e) {
    if(e.target.classList == "grid-item") {
        e.target.classList.add("changed-grid-item");
    }
})

function createGrid(gridAmount) {
    gridBox.style.setProperty('--grid-columns', gridAmount);
    gridBox.style.setProperty('--grid-rows', gridAmount);
    for(i=0;i<gridAmount*gridAmount;i++) {
        const div = document.createElement("div");
        div.classList.add('grid-item');
        gridBox.appendChild(div);
    }
}

function removeGrid() {
    while (gridBox.hasChildNodes()) {
        gridBox.removeChild(gridBox.firstChild);
    }
}

function resetGrid() {
    let input = document.getElementById("inputAmount");
    if(input.value <=100 && input.value >0) {
        removeGrid();
        createGrid(input.value);
    }
}