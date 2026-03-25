const gridContainer = document.querySelector("#grid-container");

for(let r = 0; r < 16; r++){
    const gridContainerRow = document.createElement("div");
    gridContainerRow.style.display = "flex";
    for(let i = 0; i < 100; i++){
        const newDiv = document.createElement("div");
        newDiv.style.height = "10px";
        newDiv.style.width = "10px";
        newDiv.style.border = "1px solid black";
        gridContainerRow.appendChild(newDiv);
    }
    gridContainer.appendChild(gridContainerRow);
}
