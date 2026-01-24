const productsDiv = document.getElementById("products");
const searchInput = document.querySelector(".search");

let allProducts = [];

fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    displayProducts(data);
  });

function displayProducts(products) {
  productsDiv.innerHTML = "";

  if (products.length === 0) {
    productsDiv.innerHTML = "<h3>No products found 😕</h3>";
    return;
  }

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}" onerror="this.src='https://via.placeholder.com/200'">
      <h4>${p.name}</h4>
      <p class="rating">⭐ ${p.rating || 4.2}</p>
      <p class="price">₹${p.price}</p>
      <button onclick="addToCart('${p._id}', '${p.name}', ${p.price})">
        Add to Basket
      </button>
    `;

    productsDiv.appendChild(card);
  });
}

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

function addToCart(id, name, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ id, name, price, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to basket 🛒");
}
