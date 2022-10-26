function createHomePage() {
  const homePage = document.createElement("div");
  const headline = document.createElement("h1");
  const bgImage = document.createElement("img");

  homePage.classList.add("homePage");

  headline.textContent = "The Number One Restaurant in Toronto";

  homePage.append(headline, bgImage);

  return homePage;
}

export default function homeView() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(createHomePage());
}
