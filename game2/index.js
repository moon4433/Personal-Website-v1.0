const gameBoard = [
  [...document.querySelector(".column.seven").querySelectorAll(".space")],
  [...document.querySelector(".column.six").querySelectorAll(".space")],
  [...document.querySelector(".column.five").querySelectorAll(".space")],
  [...document.querySelector(".column.four").querySelectorAll(".space")],
  [...document.querySelector(".column.three").querySelectorAll(".space")],
  [...document.querySelector(".column.two").querySelectorAll(".space")],
  [...document.querySelector(".column.one").querySelectorAll(".space")],
];
const gameBoardColumns = [
  [document.querySelector(".column.seven")],
  [document.querySelector(".column.six")],
  [document.querySelector(".column.five")],
  [document.querySelector(".column.four")],
  [document.querySelector(".column.three")],
  [document.querySelector(".column.two")],
  [document.querySelector(".column.one")],
];
const announcementDesc = document.querySelector(".announcement-desc");
let announcementColor = document.getElementById("color");
const resetButton = document.getElementById("reset");
// turn: 0 = player 1 ... 1 = player 2
let turn = 0;
let colorText;
for (let x = gameBoardColumns.length - 1; x >= 0; x--) {
  const column = gameBoardColumns[x];
  column[0].addEventListener("click", handleClick);
  column[0].addEventListener("mouseenter", (event) => {
    const freeSpaces = Array.from(column[0].querySelectorAll(".free"));
    if (freeSpaces.length > 0) {
      freeSpaces[freeSpaces.length - 1]
        .querySelector(".highlighter")
        .classList.add("active");
    }
  });
  column[0].addEventListener("mouseleave", (event) => {
    const freeSpaces = Array.from(column[0].querySelectorAll(".free"));
    if (freeSpaces.length > 0) {
      freeSpaces[freeSpaces.length - 1]
        .querySelector(".highlighter")
        .classList.remove("active");
    }
  });
}

function handleClick(event) {
  const currentColumn = this;
  const freeSpacesInCurrentColumn = [
    ...currentColumn.querySelectorAll(".space.free"),
  ];
  if (freeSpacesInCurrentColumn.length > 0) {
    if (turn === 0) {
      freeSpacesInCurrentColumn[
        freeSpacesInCurrentColumn.length - 1
      ].classList.remove("free");

      freeSpacesInCurrentColumn[
        freeSpacesInCurrentColumn.length - 1
      ].classList.add("red");

      freeSpacesInCurrentColumn[freeSpacesInCurrentColumn.length - 1]
        .querySelector(".highlighter")
        .classList.remove("active");

      turn = 1;
    } else if (turn === 1) {
      freeSpacesInCurrentColumn[
        freeSpacesInCurrentColumn.length - 1
      ].classList.remove("free");

      freeSpacesInCurrentColumn[
        freeSpacesInCurrentColumn.length - 1
      ].classList.add("black");

      freeSpacesInCurrentColumn[freeSpacesInCurrentColumn.length - 1]
        .querySelector(".highlighter")
        .classList.remove("active");

      turn = 0;
    }
  }
}

let game = setInterval(runGame, 1000 / 30);

function runGame() {
  colorText = turn === 0 ? "Red" : "Black";
  if (turn === 0) {
    announcementColor.textContent = colorText;
    announcementColor.style.color = "darkred";
  } else if (turn === 1) {
    announcementColor.textContent = colorText;
    announcementColor.style.color = "black";
  }
  determineWinner();
}

function determineWinner() {
  for (let x = gameBoard.length - 1; x >= 0; x--) {
    const column = gameBoard[x];
    for (let y = column.length - 1; y >= 0; y--) {
      const space = column[y];
      if (space.classList.contains("red")) {
        // check if above is safe
        if (column[y - 1] !== undefined) {
          if (
            column[y - 1].classList.contains("red") &&
            column[y - 2].classList.contains("red") &&
            column[y - 3].classList.contains("red")
          ) {
            redWon();
          }
          // right safe
          if (
            gameBoard[x - 1] !== undefined &&
            gameBoard[x - 2] !== undefined &&
            gameBoard[x - 3] !== undefined
          ) {
            // check right straight
            if (
              gameBoard[x - 1][y].classList.contains("red") &&
              gameBoard[x - 2][y].classList.contains("red") &&
              gameBoard[x - 3][y].classList.contains("red")
            ) {
              redWon();
            }
            // check right diagonal
            else if (
              gameBoard[x - 1][y - 1].classList.contains("red") &&
              gameBoard[x - 2][y - 2].classList.contains("red") &&
              gameBoard[x - 3][y - 3].classList.contains("red")
            ) {
              redWon();
            }
          }
          // left safe
          if (
            gameBoard[x + 1] !== undefined &&
            gameBoard[x + 2] !== undefined &&
            gameBoard[x + 3] !== undefined
          ) {
            if (
              gameBoard[x + 1][y].classList.contains("red") &&
              gameBoard[x + 2][y].classList.contains("red") &&
              gameBoard[x + 3][y].classList.contains("red")
            ) {
              redWon();
            }
            // check left diagonal
            else if (
              gameBoard[x + 1][y - 1].classList.contains("red") &&
              gameBoard[x + 2][y - 2].classList.contains("red") &&
              gameBoard[x + 3][y - 3].classList.contains("red")
            ) {
              redWon();
            }
          }
        }
      } else if (space.classList.contains("black")) {
        if (column[y - 1] !== undefined) {
          if (
            column[y - 1].classList.contains("black") &&
            column[y - 2].classList.contains("black") &&
            column[y - 3].classList.contains("black")
          ) {
            blackWon();
          }
          // right safe
          if (
            gameBoard[x - 1] !== undefined &&
            gameBoard[x - 2] !== undefined &&
            gameBoard[x - 3] !== undefined
          ) {
            // check right straight
            if (
              gameBoard[x - 1][y].classList.contains("black") &&
              gameBoard[x - 2][y].classList.contains("black") &&
              gameBoard[x - 3][y].classList.contains("black")
            ) {
              blackWon();
            }
            // check right diagonal
            else if (
              gameBoard[x - 1][y - 1].classList.contains("black") &&
              gameBoard[x - 2][y - 2].classList.contains("black") &&
              gameBoard[x - 3][y - 3].classList.contains("black")
            ) {
              blackWon();
            }
          }
          // left safe
          if (
            gameBoard[x + 1] !== undefined &&
            gameBoard[x + 2] !== undefined &&
            gameBoard[x + 3] !== undefined
          ) {
            // check left straight
            if (
              gameBoard[x + 1][y].classList.contains("black") &&
              gameBoard[x + 2][y].classList.contains("black") &&
              gameBoard[x + 3][y].classList.contains("black")
            ) {
              blackWon();
            }
            // check left diagonal
            else if (
              gameBoard[x + 1][y - 1].classList.contains("black") &&
              gameBoard[x + 2][y - 2].classList.contains("black") &&
              gameBoard[x + 3][y - 3].classList.contains("black")
            ) {
              blackWon();
            }
          }
        }
      }
    }
  }
}

function redWon() {
  announcementDesc.innerHTML =
    '<span id="color" class="announcement-color" style="color: darkred;">Red</span> wins!';
  removeClickEvents();
  clearInterval(game);
}

function blackWon() {
  announcementDesc.innerHTML =
    '<span id="color" class="announcement-color" style="color: black;">Black</span> wins!';
  announcementColor.style.color = "black";
  removeClickEvents();
  clearInterval(game);
}

function removeClickEvents() {
  for (let x = gameBoardColumns.length - 1; x >= 0; x--) {
    const column = gameBoardColumns[x];
    column[0].removeEventListener("click", handleClick);
  }
}

resetButton.addEventListener("click", (event) => {
  clearInterval(game);
  turn = 0;
  for (let x = gameBoard.length - 1; x >= 0; x--) {
    const space = gameBoard[x];
    space.forEach((space) => {
      if (space.classList.contains("red")) {
        space.classList.remove("red");
        space.classList.add("free");
      }
      if (space.classList.contains("black")) {
        space.classList.remove("black");
        space.classList.add("free");
      }
    });
    announcementDesc.innerHTML =
      'It\'s <span id="color" class="announcement-color">Red</span>\'s Turn!';
    announcementColor = document.getElementById("color");
    for (let x = gameBoardColumns.length - 1; x >= 0; x--) {
      const column = gameBoardColumns[x];

      column[0].addEventListener("click", handleClick);
    }
  }
  game = setInterval(runGame, 1000 / 30);
});
