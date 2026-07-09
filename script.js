let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  totalElement.textContent = total;
}

function filterProducts(category) {
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    if (category === "all" || product.classList.contains(category)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
} function setLanguage(language) {
  const elements = document.querySelectorAll("[data-en]");

  elements.forEach(element => {
    element.textContent = element.getAttribute(`data-${language}`);
  });
}
