const random = (array) => {
    return Math.floor(Math.random() * 2);
  };
  minesweeper = document.getElementById("minesweeper");
  square = [];
  let a = 10;
  let b = 10;
  for (i = 1; i <= a; i++) {
    for (j = 1; j <= b; j++) {
      square[i] = document.createElement("div");
      square[i].classList.add("square");
      square[i].setAttribute("id", `${i}_${j}`);
      square[i].innerHTML = `<span class="hidden">${random()}</span>`;
      minesweeper.appendChild(square[i]);
    }
  }

  square = document.querySelectorAll("#minesweeper .square");
  for (i = 0; i < square.length; i++) {
    // ************************* On click *************************
    square[i].addEventListener("click", function (event) {
      span = event.currentTarget.querySelector("span");
      console.log("span:", span);
      span.classList.remove("hidden");
      span.classList.add("visible");
      // ************************* Open *************************
      if (span.innerText == 0) {
        console.log("blank");
        span.classList.remove("hidden");
        span.classList.add("visible");
        checkAround(event.currentTarget.id);
        // event.currentTarget.classList.add("open0");
      }
      // ************************* Game Over *************************
      else if (span.innerText == 1) {
        console.log("game over");
        square = document.querySelectorAll("#minesweeper .square");
        for (i = 0; i < square.length; i++) {
          span = square[i].querySelector("span");
          span.classList.remove("hidden");
          span.classList.add("visible");
        }
      }
    });
  }

  const checkAround = (x) => {
    console.log(parseInt(x.split("_")[0]))
    console.log(parseInt(x.split("_")[1]))
  };