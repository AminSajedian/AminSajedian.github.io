window.onload = () => {
  // **************** MainBoard ****************
  const mainBoard = document.getElementById("main-board");
  const mainBoardTable = document.createElement("table");
  mainBoard.appendChild(mainBoardTable);
  const mainBoardTbody = document.createElement("tbody");
  mainBoardTable.appendChild(mainBoardTbody);

  // TODO change the name of cellNumberOfMainBoard to something better
  let cellNumberOfMainBoard = 1
  let maxCellNumberOfMainBoard = 50
  for (let firstIndex = 1; firstIndex <= 5; firstIndex++) {
    let mainBoardTableRow = document.createElement("tr");
    mainBoardTbody.appendChild(mainBoardTableRow);
    for (let secondIndex = 1; secondIndex <= 10 && cellNumberOfMainBoard <= maxCellNumberOfMainBoard; secondIndex++) {
      let mainBoardTableCell = document.createElement("td");
      mainBoardTableCell.innerText = ((firstIndex - 1) * 10 + secondIndex)
      mainBoardTableCell.classList.add(`MainBoardCell${(firstIndex - 1) * 10 + secondIndex}`);
      mainBoardTableRow.appendChild(mainBoardTableCell);
      cellNumberOfMainBoard++
    }
  }

  const buttonForMainBoard = document.createElement("button");
  buttonForMainBoard.innerText = "Play MainBoard";
  mainBoard.appendChild(buttonForMainBoard);

  function randomNumberForMainBoard() {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    const mainBoardCell = document.getElementsByClassName(`MainBoardCell${randomNumber}`)[0];
    mainBoardCell.classList.add("backgroundYellow")
  }
  buttonForMainBoard.onclick = randomNumberForMainBoard

  // LuckyStar
  const luckyStarBoard = document.getElementById("lucky-star-board");
  const luckyStarBoardTable = document.createElement("table");
  luckyStarBoard.appendChild(luckyStarBoardTable);
  const luckyStarBoardTbody = document.createElement("tbody");
  luckyStarBoardTable.appendChild(luckyStarBoardTbody);

  let cellNumberOfLuckyStarBoard = 1
  let maxCellNumberOfLuckyStarBoard = 12
  for (let firstIndex = 1; firstIndex <= 2; firstIndex++) {
    let luckyStarBoardTableRow = document.createElement("tr");
    luckyStarBoardTbody.appendChild(luckyStarBoardTableRow);
    for (let secondIndex = 1; secondIndex <= 10 && cellNumberOfLuckyStarBoard <= maxCellNumberOfLuckyStarBoard; secondIndex++) {
      let luckyStarBoardTableCell = document.createElement("td");
      luckyStarBoardTableCell.innerText = ((firstIndex - 1) * 10 + secondIndex)
      luckyStarBoardTableCell.classList.add(`LuckyStarBoardCell${(firstIndex - 1) * 10 + secondIndex}`);
      luckyStarBoardTableRow.appendChild(luckyStarBoardTableCell);
      cellNumberOfLuckyStarBoard++
    }
  }

  const buttonForLuckyStarBoard = document.createElement("button");
  buttonForLuckyStarBoard.innerText = "Play Lucky Star Board";
  luckyStarBoard.appendChild(buttonForLuckyStarBoard);

  function randomNumberForLuckyStarBoard() {
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    console.log('randomNumber:', randomNumber)
    const luckyStarBoardCell = document.getElementsByClassName(`LuckyStarBoardCell${randomNumber}`)[0];
    luckyStarBoardCell.classList.add("backgroundYellow")
  }
  buttonForLuckyStarBoard.onclick = randomNumberForLuckyStarBoard
}
