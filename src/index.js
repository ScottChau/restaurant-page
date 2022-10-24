import homeView from "./homeView.js";
import menuView from "./menuView.js";
import contactView from "./contactView.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

function init() {
  homeBtn.addEventListener("click", homeView);
  menuBtn.addEventListener("click", menuView);
  contactBtn.addEventListener("click", contactView);
}

init();
