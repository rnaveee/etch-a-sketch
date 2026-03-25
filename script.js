const gridContainer = document.querySelector("#grid-container");

for(let i = 0; i < 100; i++){
    const newDiv = document.createElement("div");
    newDiv.style.display = "flex";
    newDiv.style.height = "10px";
    newDiv.style.width = "10px";
    newDiv.style.border = "1px solid black";
    gridContainer.appendChild(newDiv);
}
const newDiv = document.createElement("div");
newDiv.style.height = "10px";
newDiv.style.width = "10px";
newDiv.style.border = "1px solid black";
gridContainer.appendChild(newDiv);