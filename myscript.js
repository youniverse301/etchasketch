const body = document.body
const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
body.appendChild(gridContainer);


function createTable() {
    for (let i = 0; i < 256; i++) {
      gridContainer.innerHTML += '<div class="cell"></div>'
    }
}
createTable();

gridButton = document.getElementById('dabutton')
gridButton.addEventListener('click', sizePrompt);
let gridSize;
let rowSize;
let columnSize;
let rowsizeNum;
let columnsizeNum;
let newSize;
let deleteCells;
const newgridContainer = document.createElement('div');
newgridContainer.classList.add('newgridContainer');
let newCells;

function sizePrompt() {
  gridSize=prompt("What size grid would you like? (Min of 10 and max of 100)")
  rowSize = gridSize.slice(0,2)
  columnSize = gridSize.slice(3,5)
  deadCells();
  newgridContainer.style.gridTemplateColumns="repeat("+columnSize+",24px)"
  newgridContainer.style.gridTemplateRows="repeat("+rowSize+",24px)"
  body.appendChild(newgridContainer);
  newCells = columnSize * rowSize
  createnewTable();
}

let cells = document.getElementsByClassName("cells");
function deadCells() {
    gridContainer.parentNode.removeChild(gridContainer)
  }

  function createnewTable() {
    for (let i = 0; i < newCells; i++) {
      newgridContainer.innerHTML += '<div class="cell"></div>'
      p = document.querySelectorAll('.cell');
      p.forEach(p => {
        p.addEventListener('mouseover', function color(event) {
         p.setAttribute('style', 'background-color: black;');
        })
      })
    }
}

var x = document.querySelectorAll('.cell');

x.forEach(x => {
    x.addEventListener('mouseover', function color(event) {
     x.setAttribute('style', 'background-color: black;');
    })
  })

