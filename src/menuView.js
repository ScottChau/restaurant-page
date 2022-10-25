function createItem(foodName, des, pri) {
  const menuItem = document.createElement("div");
  const food = document.createElement("h5");
  const description = document.createElement("h5");
  const price = document.createElement("h5");

  food.textContent = foodName;
  description.textContent = des;
  price.textContent = pri;

  menuItem.append(food, description, price);

  return menuItem;
}

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.append(
    createItem(
      "Lobster Soup",
      "Warm and creamy lobster make you feel good",
      "$5"
    ),
    createItem("Crispy Chicken", "Crispy checken makes your day", "$10"),
    createItem("Caesar Salad", "Great meal starting from great salad!", "$6")
  );
  return menu;
}

export default function menuView() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(createMenu());
}
