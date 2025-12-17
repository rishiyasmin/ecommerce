fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="https://source.unsplash.com/400x300/?${product.name}" />
        <div class="card-content">
          <h3>${product.name}</h3>
          <div class="price">₹${product.price}</div>
          <p>${product.description}</p>
          <button onclick='addToCart(${JSON.stringify(product)})'>
            Add to Cart
          </button>
        </div>
      `;

      container.appendChild(card);
    });
  });

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item._id === product._id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
