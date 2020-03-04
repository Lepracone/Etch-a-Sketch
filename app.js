let gridResolution = 100;
let grid = [];
let status = false;

const container = document.getElementById("container");
let inputElement = document.getElementById("resInput");
const button = document.getElementById("startStop");

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



button.addEventListener("click", function(){
    if(status == 1){
        status = false;
        button.textContent = "Start"
    }else{
        status = true;
        button.textContent = "Stop"
    }

    document.addEventListener("mouseover", function(e){
         if(e.target && e.target.className=="cell-item"&&status == true){
                e.target.style.background = "black";
         }
    })
    
   
});
createGrid(gridResolution);
