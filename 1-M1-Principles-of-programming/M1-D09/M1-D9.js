// BINGO CHALLENGE!!!
window.onload = () => {
    // Create programmatically (with JS) a BINGO board with 50 cells, from 1 to 50.
    // Main Borad
    const MainBorad = document.getElementById("MainBorad");
    const MainBoradTable = document.createElement("table");
    MainBoradTable.classList.add("MainBoradTable");
    let x = 1;
    for (let i = 1; i <= 10; i++) {
      MainBoradTableRow = document.createElement("tr");
      for (let j = x; j <= x + 9; j++) {
        if (j < 51) {
          MainBoradTableCell = document.createElement("td");
          MainBoradTableCell.classList.add("numberOfMainBorad");
          MainBoradTableCell.innerText = j;
          MainBoradTableRow.appendChild(MainBoradTableCell);
          MainBoradTable.appendChild(MainBoradTableRow);
          MainBorad.appendChild(MainBoradTable);
        }
      }
      x = x + 10;
    }

    // Create a button to randomize a number from 1 to 50. The same number should be highlighted on the bingo board
    const button = document.createElement("button");
    button.innerText = "Bingo";
    MainBorad.appendChild(button);

    // randomize a number from 1 to 50
    let selectedNumbers = [];
    button.onclick = () => {
      if (selectedNumbers.length <= 24) {
        numberOfMainBorad = document.getElementsByClassName(
          "numberOfMainBorad"
        );
        let numberOfUserBorad = [];
        for (i = 0; i < UserBoradTableCell.length; i++) {
          numberOfUserBorad[i] = document.getElementsByClassName(
            `numberOfUserBorad${i}`
          );
        }

        // - Take ALWAYS a new number (eg. avoid randoming the number 10 3 times)
        randomNumber = Math.floor(Math.random() * 50) + 1;
        for (i = 0; i < selectedNumbers.length; i++) {
          if (randomNumber == selectedNumbers[i]) {
            randomNumber = Math.floor(Math.random() * 50) + 1;
            i = 0;
          }
        }
        selectedNumbers.push(randomNumber);
        for (let i = 0; i < numberOfMainBorad.length; i++) {
          if (randomNumber === i + 1) {
            numberOfMainBorad[i].innerHTML = `<mark>${randomNumber}</mark>`;
          }
        }
        for (let a = 0; a < numberOfUserBorad.length; a++) {
          for (let b = 0; b < numberOfUserBorad[a].length; b++) {
            // parseInt(parseInt)
            // console.log(parseInt(numberOfUserBorad[a][b].innerText))
            if (randomNumber === parseInt(numberOfUserBorad[a][b].innerText)) {
              numberOfUserBorad[a][
                b
              ].innerHTML = `<mark>${randomNumber}</mark>`;
            }
          }
        }
      } else {
        alert("You randomized 24 numbers, you can not do any more");
      }
    };

    // - Create a USER BOARD with 24 randomized numbers that highlights as the main board does
    //   const UserBorad = document.getElementById("UserBorad");
    //   UserBoradTable = document.createElement("table");
    //   UserBoradTable.classList.add("UserBoradTable");
    //   x = 1;
    //   for (let i = 1; i <= 3; i++) {
    //     UserBoradTableRow = document.createElement("tr");
    //     for (let j = x; j <= x + 7; j++) {
    //       if (j < 51) {
    //         UserBoradTableCell = document.createElement("td");
    //         UserBoradTableCell.classList.add("number2");
    //         UserBoradTableCell.innerText = j;
    //         UserBoradTableRow.appendChild(UserBoradTableCell);
    //         UserBoradTable.appendChild(UserBoradTableRow);
    //         UserBorad.appendChild(UserBoradTable);
    //       }
    //     }
    //     x = x + 8;
    //   }
    // };

    // - Let the user choose HOW MANY user boards he's willing to play with and create them.
    const UserBorad = document.getElementById("UserBorad");
    let UserBoradTable = [];
    let UserBoradTableRow = [];
    let UserBoradTableCell = [];
    for (let c = 0; c < 3; c++) {
      UserBoradTable[c] = document.createElement("table");
      UserBoradTable[c].classList.add(`UserBoradTable${c}`);
      x = 1;
      for (let i = 1; i <= 3; i++) {
        UserBoradTableRow[c] = document.createElement("tr");
        for (let j = x; j <= x + 7; j++) {
          if (j < 51) {
            UserBoradTableCell[c] = document.createElement("td");
            UserBoradTableCell[c].classList.add(`numberOfUserBorad${c}`);
            UserBoradTableCell[c].innerText = j;
            UserBoradTableRow[c].appendChild(UserBoradTableCell[c]);
            UserBoradTable[c].appendChild(UserBoradTableRow[c]);
            UserBorad.appendChild(UserBoradTable[c]);
          }
        }
        x = x + 8;
      }
    }
  };
  // let HowManyTimesButton = document.getElementById("HowManyTimesButton");
  // // HowManyTimesButton.onclick = () => {
  // let NumberOfTimes = document.getElementById("NumberOfTimes").value;
  // // console.log("NumberOfTimes:", NumberOfTimes);
  // for (let y = 0; y < NumberOfTimes; y++) {
  //   selectedNumbers[y] = [];

  //   if (selectedNumbers[y].length != 24) {
  //     for (let i = 0; i < selectedNumbers[y].length; i++) {
  //       if (randomNumber === selectedNumbers[y][i]) {
  //         randomNumber = Math.floor(Math.random() * 50) + 1;
  //         i = 0;
  //       }
  //     }
  //     selectedNumbers[y].push(randomNumber);

  //     for (let i = 0; i < number.length; i++) {
  //       if (randomNumber === i + 1) {
  //         number[i].innerHTML = `<mark>${randomNumber}</mark>`;
  //       }
  //     }
  //   } else {
  //     alert("You randomized 24 numbers, you can not do any more");
  //   }
  // }
