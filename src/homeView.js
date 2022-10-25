function createHomePage() {
  const homePage = document.createElement("div");
  const headline = document.createElement("h1");
  const image = document.createElement("img");

  homePage.classList.add("homePage");

  image.src =
    "http://secure.s.forbestravelguide.com/img/properties/one-restaurant/one-restaurant.jpg";
  headline.textContent = "The Number One Restaurant in Toronto";

  homePage.append(headline, image);

  return homePage;
}

export default function homeView() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(createHomePage());
}
