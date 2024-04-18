
function boardMakerV1(parentId, maxCellNumber, rowNumber, columnNumber, buttonText) {
  // ******** Create a table and tbody ********
  const parentElement = document.getElementById(parentId);
  const table = document.createElement("table");
  parentElement.appendChild(table);
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  // ******** Create a table cells with id ********
  let cellNumber = 1
  for (let firstIndex = 1; firstIndex <= rowNumber; firstIndex++) {
    let tableRow = document.createElement("tr");
    tbody.appendChild(tableRow);
    for (let secondIndex = 1; secondIndex <= columnNumber && cellNumber <= maxCellNumber; secondIndex++) {
      let tableCell = document.createElement("td");
      tableCell.innerText = cellNumber
      // ********** Add id to the table cell **********
      tableCell.id = `${parentId}-cell-${cellNumber}`;
      tableRow.appendChild(tableCell);
      cellNumber++
    }
  }

  // ******* Create a button for table *******
  const button = document.createElement("button");
  button.innerText = buttonText;
  parentElement.appendChild(button);

  // ******* Create a function for table button to make a random number *******
  function randomNumberMaker() {
    let randomNumber = Math.floor(Math.random() * maxCellNumber) + 1;
    const chosenCell = document.getElementById(`${parentId}-cell-${randomNumber}`);

    // Zero > Low > Medium > high > Max
    // Blue > Green > Yellow > Orange > Red
    if (chosenCell.style.backgroundColor == "") {
      chosenCell.style = "background-color: lightblue;"
    } else if (chosenCell.style.backgroundColor == "lightblue") {
      chosenCell.style.backgroundColor = "lightgreen"
    } else if (chosenCell.style.backgroundColor == "lightgreen") {
      chosenCell.style.backgroundColor = "yellow"
    } else if (chosenCell.style.backgroundColor == "yellow") {
      chosenCell.style.backgroundColor = "orange"
    } else if (chosenCell.style.backgroundColor == "orange") {
      chosenCell.style.backgroundColor = "red"
    }
  }

  button.onclick = randomNumberMaker
}

function boardMakerV2(parentId, cellsNumber, maxRowsNumber, buttonText) {
  //  ******** Define the number of rows and columns in the table ********
  let numRows = 0;
  let numCols = 0;
  if (cellsNumber < maxRowsNumber) {
    numRows = cellsNumber;
    numCols = Math.ceil(cellsNumber / numRows);
  } else {
    numRows = maxRowsNumber;
    numCols = Math.ceil(cellsNumber / numRows);
  }

  // ******** Create an arrays for cells, rows, and columns ********
  const cells = Array.from({ length: cellsNumber }, (_, index) => {
    number = index + 1;
    // row = Math.ceil(number / numCols);
    // col = number % numCols === 0 ? numCols : number % numCols;
    console.log("index: ", index);
    console.log("number: ", number);
    console.log("-------------------");
    return ({ number })
  });
  const rows = Array.from({ length: numRows }, (_, index) => index + 1);
  const columns = Array.from({ length: numCols }, (_, index) => index + 1);
  console.log("cells: ", cells);

  // ******** Create a table and tbody ********
  const parentElement = document.getElementById(parentId);
  const table = document.createElement("table");
  parentElement.appendChild(table);
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);


  // ******** insert numbers to a table ********
  // let tableRow = document.createElement("tr");
  // tbody.appendChild(tableRow);


  rows.forEach(rowElement => {
    let tableRow = document.createElement("tr");
    tbody.appendChild(tableRow);
    columns.forEach(colElement => {
      let tableCell = document.createElement("td");
      tableCell.innerText = cellElement.number
      // ********** Add id to the table cell **********
      tableCell.id = `${parentId}-cell-${cellElement.number}`;
      tableRow.appendChild(tableCell);
    });
  })

  // // ******* Create a button for table *******
  // const button = document.createElement("button");
  // button.innerText = buttonText;
  // parentElement.appendChild(button);

  // // ******* Create a function for table button to make a random number *******
  // function randomNumberMaker() {
  //   let randomNumber = Math.floor(Math.random() * maxCellNumber) + 1;
  //   const chosenCell = document.getElementById(`${parentId}-cell-${randomNumber}`);
  // }

  // button.onclick = randomNumberMaker
}

window.onload = () => {
  boardMakerV2("test-board", 12, 5, "Play Main Board")

  boardMakerV1("main-board", 50, 5, 10, "Play Main Board")
  boardMakerV1("lucky-star-board", 12, 2, 6, "Play Lucky Star Board")
}
