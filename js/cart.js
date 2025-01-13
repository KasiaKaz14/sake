const cartContainer = document.querySelector(".cart-items");
const totalPriceElement = document.getElementById("cart-total-price");
const allCart = document.querySelector(".delete-cart-btn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productName, productPrice) {
  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: productPrice,
      quantity: 1,
    });
    allCart.style.display = "block";
  }

  saveCartToLocalStorage();
  updateCart();
}

function decreaseQuantity(productName) {
  const product = cart.find((item) => item.name === productName);

  if (product) {
    product.quantity -= 1;
    if (product.quantity <= 0) {
      cart = cart.filter((item) => item.name !== productName);
    }
  }

  saveCartToLocalStorage();
  updateCart();
}

// Usuwanie elementów z koszyka
function removeFromCart(productName) {
  cart = cart.filter((item) => item.name !== productName);
  saveCartToLocalStorage();
  updateCart();
}

// koszt całkowity
function calculateTotalPrice() {
  return cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
}

//delete all cart
allCart.addEventListener("click", () => {
  if (allCart) {
    cart = [];
    saveCartToLocalStorage();
    updateCart();
    allCart.style.display = "none";
  }
});

function updateCart() {
  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>${item.quantity} x ${item.price.toFixed(2)} zł</span>
    `;

    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.classList.add("increase-button");
    increaseButton.addEventListener("click", () =>
      addToCart(item.name, item.price)
    );

    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.classList.add("decrease-button");
    decreaseButton.addEventListener("click", () => decreaseQuantity(item.name));

    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => removeFromCart(item.name));

    cartItem.appendChild(increaseButton);
    cartItem.appendChild(decreaseButton);
    cartItem.appendChild(removeButton);

    cartContainer.appendChild(cartItem);
  });

  // Aktualizacja sumy całkowitej
  totalPriceElement.textContent = calculateTotalPrice();
}

// Inicjalizuje przyciski "Add to cart"
function initializeAddToCartButtons() {
  const productButtons = document.querySelectorAll(".product-list button");

  productButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productElement = event.target.closest(".product-list");
      const productName = productElement.querySelector("h3").textContent;
      const productPrice = 19.99; // Cena stała
      addToCart(productName, productPrice);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCart();
  initializeAddToCartButtons();
});
