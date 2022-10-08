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


var x = document.querySelectorAll('.cell');


x.forEach(x => {
    x.addEventListener('mouseover', function color(event) {
     x.setAttribute('style', 'background-color: black;');
    })
  })

