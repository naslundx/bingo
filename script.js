const table = document.querySelector('table');

let ROWS = 15;
let COLS = 5;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

const addRow = (numbers, header=false) => {
    const tr = document.createElement('tr');

    for (const n of numbers) {
        const td = document.createElement(header ? 'th' : 'td');
        td.innerText = n;
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

const addRows = () => {
    const columns = [];
    for (let idx=0; idx<COLS; idx++) {
        const column = Array.from({length: ROWS}, (_, i) => i + 1 + (idx * ROWS));
        shuffle(column);
        columns.push(column);
    }

    for (let idx=0; idx<ROWS; idx++) {
        const row = columns.map(column => column[idx]);
        addRow(row);
    }
}

// ADD custom number of tables

addRow(['B', 'I', 'N', 'G', 'O'], true);
addRows();
