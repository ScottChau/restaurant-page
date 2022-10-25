function createContact() {
  const contact = document.createElement("div");
  const email = document.createElement("h5");
  const phone = document.createElement("h5");
  const address = document.createElement("h5");

  contact.classList.add("contact");

  email.textContent = "Email: scottshing@yahoo.com.hk";
  phone.textContent = "Phone: 999-999-9999";
  address.textContent = "Address: Toronto";

  contact.append(email, phone, address);

  return contact;
}

export default function contactView() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  main.appendChild(createContact());
}
