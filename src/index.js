import homeView from "./homeView.js";
import menuView from "./menuView.js";
import contactView from "./contactView.js";
import initial from "./website.js";

initial();

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

homeBtn.addEventListener("click", homeView);
menuBtn.addEventListener("click", menuView);
contactBtn.addEventListener("click", contactView);

homeView();
