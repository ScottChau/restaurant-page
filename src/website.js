function createHeader() {
  const header = document.createElement("header");
  const name = document.createElement("h1");

  header.classList.add("header");
  name.textContent = "Hacker Restaurant";

  header.appendChild(name);
  content.appendChild(header);
  return header;
}

createHeader();
const header = document.querySelector(".header");

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  content.append(main);

  return main;
}

function createBtn() {
  const homeBtn = document.createElement("button");
  homeBtn.innerHTML = "Home Page";
  homeBtn.classList.add("homeBtn");

  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = "Menu";
  menuBtn.classList.add("menuBtn");

  const contactBtn = document.createElement("button");
  contactBtn.innerHTML = "Contact Details";
  contactBtn.classList.add("contactBtn");

  return header.append(homeBtn, menuBtn, contactBtn);
}

export default function initial() {
  createBtn();
  createMain();

  const main = document.querySelector(".main");
}
