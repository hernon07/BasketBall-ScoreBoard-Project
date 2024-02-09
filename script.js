const hScoreBoard = document.getElementById("home-scoreboard");
const gScoreBoard = document.getElementById("guest-scoreboard");

const resetBtn = document.getElementById("reset");

const homeBtn = document.getElementById("home-btn-container");
const guestBtn = document.getElementById("guest-btn-container");

homeBtn.addEventListener("click", function (e) {
  const btn = e.target.id;

  switch (btn) {
    case "home-btn1":
      hScoreBoard.value = Number(hScoreBoard.value) + 1;
      break;

    case "home-btn2":
      hScoreBoard.value = Number(hScoreBoard.value) + 2;
      break;

    case "home-btn3":
      hScoreBoard.value = Number(hScoreBoard.value) + 3;
      break;
  }
});

guestBtn.addEventListener("click", function (e) {
  const btn = e.target.id;

  switch (btn) {
    case "guest-btn1":
      gScoreBoard.value = Number(gScoreBoard.value) + 1;
      break;

    case "guest-btn2":
      gScoreBoard.value = Number(gScoreBoard.value) + 2;
      break;

    case "guest-btn3":
      gScoreBoard.value = Number(gScoreBoard.value) + 3;
      break;
  }
});

resetBtn.addEventListener("click", function () {
  gScoreBoard.value = "0";
  hScoreBoard.value = "0";
});
