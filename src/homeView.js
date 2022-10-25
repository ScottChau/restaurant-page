export default function homeView() {
  const main = document.querySelector(".main");
  const headline = document.createElement("h1");
  const image = document.createElement("img");

  main.innerHTML = "";
  image.src =
    "http://secure.s.forbestravelguide.com/img/properties/one-restaurant/one-restaurant.jpg";
  headline.textContent = "The Number One Restaurant in Toronto";

  main.append(headline, image);
}
