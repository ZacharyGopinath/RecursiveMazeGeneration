function addRows(rowIndex) {
    if (rowIndex > mazeHeight) return 0
    const row = document.createElement("tr");
    addColumns(1, row, rowIndex)
    tbody.appendChild(row);
    addRows(rowIndex + 1)
}

function addColumns(colIndex, row, rowIndex) {

    if (colIndex > mazeWidth) return 0

    const col = document.createElement("td");
    col.style.backgroundColor = "#FFF";
    col.style['Border-right'] = 'red'
    col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);
    row.appendChild(col);

    addColumns(colIndex + 1, row, rowIndex)
}

const mazeWidth = 30;
const mazeHeight = mazeWidth;
let rowIndex, colIndex;
let currentCell;
const table = document.createElement("table");
const tbody = document.createElement("tbody");

addRows(1)

table.appendChild(tbody);

document.getElementById("maze_container").appendChild(table);
let directions = [];
let exits = [];
let exit;

let exitIndex;

for (exit = 1; exit <= mazeWidth - 1; exit++) {

    exits.push("right");
    exits.push("down");

}

currentCell = document.getElementById("cell_1_1");

rowIndex = 1;

colIndex = 1;



for (loop = 0; loop < (mazeWidth + mazeHeight - 2); loop++) {

    exitIndex = Math.floor(Math.random() * exits.length);

    exit = exits[exitIndex];

    exits.splice(exitIndex, 1);

    switch (exit) {

        case "right":

            colIndex = colIndex + 1;
            break;

        case "down":

            rowIndex = rowIndex + 1;
            break;

    }
    directions.push(exit)
}

document.getElementById('cell_1_1').style.backgroundColor = '#f00000'
document.getElementById('cell_' + mazeWidth + '_' + mazeWidth).style.backgroundColor = '#34eb5e'

function markDirections(directionNum, horizontalIndex, verticalIndex) {
    if (directionNum >= directions.length) return 0

    const direction = directions[directionNum];

    document.getElementById('cell_' + verticalIndex + '_' + horizontalIndex).style.borderBottom = '1.5px solid white';
    document.getElementById('cell_' + verticalIndex + '_' + horizontalIndex).style.borderRight = '1.5px solid white';

    direction == 'right' ? horizontalIndex += 1 : null
    direction == 'left' ? horizontalIndex -= 1 : null
    direction == 'up' ? verticalIndex -= 1 : null
    direction == 'down' ? verticalIndex += 1 : null




    markDirections(directionNum + 1, horizontalIndex, verticalIndex)
}
markDirections(0, 1, 1);

function createWrongPaths(len) {
    if (len == Math.round(20 * mazeWidth)) return 0

    const verticalIndex = Math.floor(Math.random() * mazeWidth);
    const horizontalIndex = Math.floor(Math.random() * mazeWidth);
    verticalIndex > 0 && horizontalIndex > 0 ?
        (document.getElementById('cell_' + verticalIndex + '_' + horizontalIndex).style.borderBottom = '1.5px solid white',
            document.getElementById('cell_' + verticalIndex + '_' + horizontalIndex).style.borderRight = '1.5px solid white') : null
    createWrongPaths(len + 1)
}
createWrongPaths(0)
