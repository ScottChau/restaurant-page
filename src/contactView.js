export default function contactView() {
  content.innerHTML = "";

  const email = document.createElement("h5");
  const phone = document.createElement("h5");
  const address = document.createElement("h5");

  email.textContent = "Email: scottshing@yahoo.com.hk";
  phone.textContent = "Phone: 999-999-9999";
  address.textContent = "Address: Toronto";

  content.append(email, phone, address);
}
