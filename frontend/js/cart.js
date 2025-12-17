const cartContainer = document.getElementById("cart");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach((item, index) => {
  total += item.price * item.quantity;

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-content">
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <button onclick="removeItem(${index})">Remove</button>
    </div>
  `;

  cartContainer.appendChild(card);
});

totalEl.innerText = `Total Amount: ₹${total}`;

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
