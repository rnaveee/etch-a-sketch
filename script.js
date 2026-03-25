const gridContainer = document.querySelector("#grid-container");

let boxes = [];
let mouseState = false;
document.addEventListener("mousedown", () => {
    mouseState = true;
});
document.addEventListener("mouseup", () => {
    mouseState = false;
});

for(let r = 0; r < 50; r++){
    const gridContainerRow = document.createElement("div");
    gridContainerRow.style.display = "flex";
    for(let i = 0; i < 50; i++){
        const newDiv = document.createElement("div");
        boxes.push(newDiv);
        newDiv.style.height = "10px";
        newDiv.style.width = "10px";
        newDiv.style.border = "1px solid black";
        newDiv.addEventListener("mouseout", () => {
            if(!newDiv.classList.contains("clicked")){
                newDiv.style.backgroundColor = "white";
            }
        });
        newDiv.addEventListener("mouseover", () => {
            if(!newDiv.classList.contains("clicked") && !mouseState){
                newDiv.style.backgroundColor = "gray";
            } else if (!newDiv.classList.contains("clicked") && mouseState) {
                newDiv.classList.add("clicked");
                newDiv.style.backgroundColor = "black";
            }
        });
        gridContainerRow.appendChild(newDiv);
    }
    gridContainer.appendChild(gridContainerRow);
}