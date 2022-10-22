console.log("Testing YoYo");
const content = document.querySelector("#content");

function component() {
  const headline = document.createElement("h1");
  const image = document.createElement("img");
  image.src =
    "http://secure.s.forbestravelguide.com/img/properties/one-restaurant/one-restaurant.jpg";
  headline.textContent = "The Number One Restaurant in Toronto";

  content.appendChild(headline);
  content.appendChild(image);
}

component();
