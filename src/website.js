function createHeader() {
  const header = document.createElement("header");
  const name = document.createElement("h1");

  header.classList.add("header");
  name.textContent = "Hacker Restaurant";

  header.appendChild(name);
  content.appendChild(header);
  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  content.append(main);

  return main;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const homeBtn = document.createElement("button");
  homeBtn.innerHTML = "Home Page";
  homeBtn.classList.add("homeBtn");

  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = "Menu";
  menuBtn.classList.add("menuBtn");

  const contactBtn = document.createElement("button");
  contactBtn.innerHTML = "Contact Details";
  contactBtn.classList.add("contactBtn");

  nav.append(homeBtn, menuBtn, contactBtn);

  return nav;
}

function createFooter() {
  const footer = document.createElement("div");
  const copyRight = document.createElement("h3");
  footer.classList.add("footer");

  copyRight.textContent = "Copyright Ⓒ Scott Chau";

  footer.appendChild(copyRight);

  content.appendChild(footer);

  return footer;
}

export default function initial() {
  createHeader().appendChild(createNav());
  createMain();
  createFooter();
}
