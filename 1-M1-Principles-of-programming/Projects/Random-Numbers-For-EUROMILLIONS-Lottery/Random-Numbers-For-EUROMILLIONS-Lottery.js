window.onload = () => {
  // MainBoard
  const MainBoard = document.getElementById("MainBoard");
  const MainBoardTable = document.createElement("table");
  MainBoard.appendChild(MainBoardTable);
  const MainBoardTbody = document.createElement("tbody");
  MainBoardTable.appendChild(MainBoardTbody);

  let CellNumberOfMainBoard = 1
  let MaxCellNumberOfMainBoard = 50
  for (let index1 = 1; index1 <= 5; index1++) {
    MainBoardTableRow = document.createElement("tr");
    MainBoardTbody.appendChild(MainBoardTableRow);
    for (let index2 = 1; index2 <= 10 && CellNumberOfMainBoard <= MaxCellNumberOfMainBoard; index2++) {
      MainBoardTableCell = document.createElement("td");
      MainBoardTableCell.innerText = ((index1 - 1) * 10 + index2)
      MainBoardTableCell.classList.add(`MainBoardCell${(index1 - 1) * 10 + index2}`);
      MainBoardTableRow.appendChild(MainBoardTableCell);
      CellNumberOfMainBoard++
    }
  }

  const buttonForMainBoard = document.createElement("button");
  buttonForMainBoard.innerText = "Play MainBoard";
  MainBoard.appendChild(buttonForMainBoard);

  function randomNumberForMainBoard() {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    const MainBoardCell = document.getElementsByClassName(`MainBoardCell${randomNumber}`)[0];
    MainBoardCell.classList.add("backgroundYellow")
  }
  buttonForMainBoard.onclick = randomNumberForMainBoard

  // LuckyStar
  const LuckyStarBoard = document.getElementById("LuckyStarBoard");
  const LuckyStarBoardTable = document.createElement("table");
  LuckyStarBoard.appendChild(LuckyStarBoardTable);
  const LuckyStarBoardTbody = document.createElement("tbody");
  LuckyStarBoardTable.appendChild(LuckyStarBoardTbody);

  let CellNumberOfLuckyStarBoard = 1
  let MaxCellNumberOfLuckyStarBoard = 12
  for (let index1 = 1; index1 <= 2; index1++) {
    LuckyStarBoardTableRow = document.createElement("tr");
    LuckyStarBoardTbody.appendChild(LuckyStarBoardTableRow);
    for (let index2 = 1; index2 <= 10 && CellNumberOfLuckyStarBoard <= MaxCellNumberOfLuckyStarBoard; index2++) {
      LuckyStarBoardTableCell = document.createElement("td");
      LuckyStarBoardTableCell.innerText = ((index1 - 1) * 10 + index2)
      LuckyStarBoardTableCell.classList.add(`LuckyStarBoardCell${(index1 - 1) * 10 + index2}`);
      LuckyStarBoardTableRow.appendChild(LuckyStarBoardTableCell);
      CellNumberOfLuckyStarBoard++
    }
  }

  const buttonForLuckyStarBoard = document.createElement("button");
  buttonForLuckyStarBoard.innerText = "Play Lucky Star Board";
  LuckyStarBoard.appendChild(buttonForLuckyStarBoard);

  function randomNumberForLuckyStarBoard() {
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    console.log('randomNumber:', randomNumber)
    const LuckyStarBoardCell = document.getElementsByClassName(`LuckyStarBoardCell${randomNumber}`)[0];
    LuckyStarBoardCell.classList.add("backgroundYellow")
  }
  buttonForLuckyStarBoard.onclick = randomNumberForLuckyStarBoard
}
