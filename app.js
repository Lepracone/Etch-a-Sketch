let gridResolution = 100;
let grid = [];

const container = document.getElementById("container");
const button = document.getElementById("button");
let inputElement = document.getElementById("resInput");

inputElement.addEventListener("change", function(e){
    gridResolution = e.target.value;
    createGrid(gridResolution);
});

function createGrid(gridResolution){
    container.style.setProperty("--grid-resolution", gridResolution);
    for(let i=0; i < gridResolution*gridResolution; i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "cell-item";
    }
}

document.addEventListener("mouseover", function(e){
    if(e.target && e.target.className=="cell-item"){
        e.target.style.background = "black";
    }
})

createGrid(gridResolution);

