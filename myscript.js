const body = document.body
const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
body.appendChild(gridContainer);

function createTable() {
    for (let i = 0; i < 256; i += 1) {
      const createDiv = document.createElement('div');
      createDiv.className="cell"
      gridContainer.appendChild(createDiv);
    }
}
createTable();
