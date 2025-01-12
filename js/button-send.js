const sendButton = document.querySelector(".order-button");
const customAlert = document.getElementById("customAlert");
const closeAlertButton = document.querySelector(".close-alert");
const cartItemsList = document.querySelector(".cart-items");
const cartTotal = document.querySelector("#cart-total-price");

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  customAlert.style.display = "flex";
});

closeAlertButton.addEventListener("click", () => {
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.reset();
  }

  localStorage.removeItem("orderSummary");
  localStorage.removeItem("cart");

  if (cartItemsList) {
    cartItemsList.innerHTML = "";
  }

  if (cartTotal) {
    cartTotal.textContent = "0.00";
  }

  window.location.replace("./index.html");
});

customAlert.addEventListener("click", (event) => {
  if (event.target === customAlert) {
    customAlert.style.display = "none";
  }
});
