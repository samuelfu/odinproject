const container = document.querySelector("#container")


function hover(event) {
    // // highlight the mouseenter target
    // event.target.style.backgroundColor = "black";

    // // reset the color after a short delay
    // setTimeout(() => {
    //   event.target.style.backgroundColor = "";
    // }, 500);
}

function createGrid() {
    for (let i = 0; i < 160; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let j = 0; j < 160; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col');
            colDiv.textContent = 'O';
            colDiv.addEventListener("mouseenter", hover, false);
            rowDiv.appendChild(colDiv);
        }
        container.appendChild(
            rowDiv
        );
    }
}


createGrid();