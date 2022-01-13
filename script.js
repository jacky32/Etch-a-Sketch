const gridBox = document.getElementById("grid-box");
let rgbToggle = false;
document.getElementById("button-reset").addEventListener("click", () => {resetGrid()});
document.addEventListener("keyup", (e) => {if(e.key === "Enter") {resetGrid();}});
document.getElementById("button-RGB").addEventListener("click", () => {if(rgbToggle) rgbToggle = false; else rgbToggle = true;});
document.getElementById("button-RGB").addEventListener("Touch", () => {if(rgbToggle) rgbToggle = false; else rgbToggle = true;});
gridBox.addEventListener("mousemove", (e) => {changeColor(e);})

createGrid(16);


function changeColor(e){
    if(e.target.classList.contains("grid-item")) {
        if(rgbToggle){
            if(e.target.classList.contains("rgb")){
                let BGC = window.getComputedStyle(e.target).backgroundColor.slice(4,-1).split(", ");
                for(i=0;i<3;i++) {
                    if(Number(BGC[i])>25){
                        BGC[i] = Number(BGC[i]) - 25;
                    }
                    else BGC[i] = 0;
                }
                e.target.style.backgroundColor = "rgb("+ BGC[0] +","+BGC[1]+","+BGC[2]+")";
            }
            else {
                e.target.style.backgroundColor = "rgb("+Math.random()*256+","+Math.random()*256+","+Math.random()*256+")"
                e.target.classList.add("rgb");
            }
        }
        else {
            e.target.style.backgroundColor = "black";
        }
    }
}

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
    else if (input.value==0) {
        removeGrid();
        createGrid(16);
    }
}