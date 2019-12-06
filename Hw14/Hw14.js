const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const score = document.querySelector(".score");
const startBtn = document.querySelector(".start");
const menu = document.querySelector(".menu");
const currentName = document.querySelector("#name");
const closePopup = document.querySelector(".popup-close");
const countCatchPopup = document.querySelector(".popup-count-catch");
const countAll = document.querySelector(".popup-count-all");
const diffEasy = document.querySelector(".easy");
const diffMiddle = document.querySelector(".middle");
const diffHard = document.querySelector(".hard");
const warning = document.querySelector(".warning");
const showResults = document.querySelector(".results");
const tablePopup = document.querySelector(".table-results-wrap");
const tableClose = document.querySelector(".table-close");
let isPlaying = false;
let countMoles = 0;
let totalMoles = 0;
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".popup-overlay");
const difficultyTime = {
  minTime: 0,
  maxTime: 0
};

startBtn.addEventListener("click", function() {
  warning.classList.remove("popup-show");
  if (currentName.value === "") {
    warning.classList.add("popup-show");
  } else startGame();
});
moles.forEach(mole => {
  mole.addEventListener("click", catchMole);
});

function catchMole() {
  countMoles++;
  score.textContent = countMoles;
  countCatchPopup.textContent = countMoles;
  this.parentElement.classList.remove("up");
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const id = Math.floor(Math.random() * holes.length);
  const hole = holes[id];
  return hole;
}

function showMole() {
  totalMoles++;
  const time = randomTime(difficultyTime.minTime, difficultyTime.maxTime);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (isPlaying) showMole();
    else finishGame();
  }, time);
}

function startGame() {
  if (diffEasy.checked === true) {
    difficultyTime.minTime = 2000;
    difficultyTime.maxTime = 3000;
  } else if (diffMiddle.checked === true) {
    difficultyTime.minTime = 1000;
    difficultyTime.maxTime = 2000;
  } else if (diffHard.checked === true) {
    difficultyTime.minTime = 500;
    difficultyTime.maxTime = 1000;
  }

  menu.style.display = "none";
  totalMoles = 0;
  showMole();
  isPlaying = true;
  setTimeout(() => {
    isPlaying = false;
  }, 6000);
}

function finishGame() {
  countAll.textContent = totalMoles;
  menu.style.display = "block";
  popup.classList.add("popup-show");
  overlay.classList.add("popup-show");
  const list = JSON.parse(localStorage.getItem("usersList")) || [];
  list.push({ name: currentName.value, count: countMoles, total: totalMoles });
  localStorage.setItem("usersList", JSON.stringify(list));
  countMoles = 0;
  score.textContent = 0;
  currentName.value = "";
}

closePopup.addEventListener("click", function() {
  popup.classList.remove("popup-show");
  overlay.classList.remove("popup-show");
});

showResults.addEventListener("click", function() {
  tablePopup.classList.add("popup-show");

  overlay.classList.add("popup-show");
  tablePopup.insertAdjacentHTML(
    "afterbegin",
    `<table class="table-results"><thead><th>Имя</th><th>Результат</th><th>Из возможного</th></thead></table>`
  );
  const listUsers = JSON.parse(localStorage.getItem("usersList"));
  const lastten = [];
  const tableResults = document.querySelector(".table-results");
  for (let i = listUsers.length - 10; i < listUsers.length; i++) {
    lastten.push(listUsers[i]);
  }
  lastten.forEach(el => {
    tableResults.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${el.name}</td><td>${el.count}</td><td>${el.total}</td</tr>`
    );
  });
  tableClose.addEventListener("click", function() {
    tableResults.parentElement.removeChild(tableResults);
    tablePopup.classList.remove("popup-show");
    overlay.classList.remove("popup-show");
  });
});


