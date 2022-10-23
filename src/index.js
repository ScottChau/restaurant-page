import homeView from "./homeView.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".homeBtn");

function init() {
  homeBtn.addEventListener("click", homeView);
}

init();
