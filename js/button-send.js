const sendButton = document.querySelector(".order-button"); // Przycisk zamówienia
const customAlert = document.getElementById("customAlert"); // Kontener alertu
const customAlertContent = document.querySelector(".custom-alert-content");
const closeAlertButton = document.querySelector(".close-alert"); // Przycisk OK

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  customAlert.style.display = "flex";
});

closeAlertButton.addEventListener("click", () => {
  customAlert.style.display = "none";
});

// Opcjonalnie: Zamknij alert po kliknięciu na tło
customAlert.addEventListener("click", (event) => {
  if (event.target === customAlert) {
    customAlert.style.display = "none";
  }
});
