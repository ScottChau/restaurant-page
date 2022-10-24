function menu(foodName, des, pri) {
  const container = document.createElement("div");
  const food = document.createElement("h5");
  const description = document.createElement("h5");
  const price = document.createElement("h5");

  food.textContent = foodName;
  description.textContent = des;
  price.textContent = pri;

  container.append(food, description, price);
  content.appendChild(container);
}

export default function menuView() {
  content.innerHTML = "";
  menu("Lobster Soup", "Warm and creamy lobster make you feel good", "$5");
  menu("Crispy Chicken", "Crispy checken makes your day", "$10");
  menu("Caesar Salad", "Great meal starting from great salad!", "$6");
}
