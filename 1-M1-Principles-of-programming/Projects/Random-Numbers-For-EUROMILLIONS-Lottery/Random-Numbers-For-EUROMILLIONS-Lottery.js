
function boardMaker(parentId, maxCellNumber, rowNumber, columnNumber, buttonText) {
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
    // if (chosenCell.style.backgroundColor == "") {
    //   chosenCell.style = "background-color: rgba(255, 255, 0, 0.2);"
    // } else if (chosenCell.style.backgroundColor == "rgba(255, 255, 0, 0.2)") {
    //   chosenCell.style.backgroundColor = "rgba(255, 255, 0, 0.4)"
    // } else if (chosenCell.style.backgroundColor == "rgba(255, 255, 0, 0.4)") {
    //   chosenCell.style.backgroundColor = "rgba(255, 255, 0, 0.6)"
    // } else if (chosenCell.style.backgroundColor == "rgba(255, 255, 0, 0.6)") {
    //   chosenCell.style.backgroundColor = "rgba(255, 255, 0, 0.8)"
    // } else if (chosenCell.style.backgroundColor == "rgba(255, 255, 0, 0.8)") {
    //   chosenCell.style.backgroundColor = "rgba(255, 255, 0, 1)"
    // }

  }

  button.onclick = randomNumberMaker
}

window.onload = () => {
  boardMaker("main-board", 50, 5, 10, "Play Main Board")
  boardMaker("lucky-star-board", 12, 2, 6, "Play Lucky Star Board")
}
