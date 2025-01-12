const cartContainer = document.querySelector(".cart-items");
const totalPriceElement = document.getElementById("cart-total-price");

// Inicjalizacja koszyka
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Funkcja do zapisywania koszyka w localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Funkcja do dodawania produktu do koszyka
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
  }

  saveCartToLocalStorage();
  updateCart();
}

// Funkcja do zmniejszania liczby produktu w koszyku
function decreaseQuantity(productName) {
  const product = cart.find((item) => item.name === productName);

  if (product) {
    product.quantity -= 1;
    if (product.quantity <= 0) {
      cart = cart.filter((item) => item.name !== productName); // Usuń produkt, jeśli ilość jest 0
    }
  }

  saveCartToLocalStorage();
  updateCart();
}

// Funkcja do usuwania produktu z koszyka
function removeFromCart(productName) {
  cart = cart.filter((item) => item.name !== productName);
  saveCartToLocalStorage();
  updateCart();
}

// Funkcja do obliczania całkowitego kosztu
function calculateTotalPrice() {
  return cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
}

// Funkcja do aktualizacji koszyka w UI
function updateCart() {
  cartContainer.innerHTML = ""; // Wyczyszczenie zawartości

  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>${item.quantity} x ${item.price.toFixed(2)} zł</span>
    `;

    // Dodanie przycisków do zarządzania ilością
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

// Funkcja inicjalizująca przyciski "Add to cart"
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

// Inicjalizacja po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  // Załaduj koszyk z localStorage, jeśli jest zapisany
  updateCart();
  initializeAddToCartButtons();
});
