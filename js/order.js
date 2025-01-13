document.addEventListener("DOMContentLoaded", () => {
  const goToSummaryButton = document.getElementById("goToSummary");

  // Funkcja do załadowania danych z localStorage do formularza
  const loadFormData = () => {
    const storedData = localStorage.getItem("orderSummary");
    if (storedData) {
      const orderData = JSON.parse(storedData);

      document.getElementById("shop").value = orderData.shop || "";
      document.getElementById("name").value = orderData.name || "";
      document.getElementById("surname").value = orderData.surname || "";
      document.getElementById("email").value = orderData.email || "";
      document.getElementById("phoneNumber").value =
        orderData.phoneNumber || "";
    }
  };

  // Funkcja do zapisania danych formularza do localStorage
  const saveDataToLocalStorage = () => {
    const orderData = {
      shop: document.getElementById("shop").value,
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
    };

    localStorage.setItem("orderSummary", JSON.stringify(orderData));
  };

  // Nasłuchiwanie zmian w formularzu i automatyczne zapisywanie danych
  const form = document.getElementById("orderForm");
  form.addEventListener("input", saveDataToLocalStorage);

  // Załaduj dane z localStorage przy pierwszym załadowaniu strony
  loadFormData();

  // Obsługa przycisku przejścia do podsumowania
  goToSummaryButton.addEventListener("click", (e) => {
    const orderData = {
      shop: document.getElementById("shop").value,
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
    };

    // Walidacja formularza
    if (
      !orderData.shop ||
      !orderData.name ||
      !orderData.surname ||
      !orderData.email ||
      !orderData.phoneNumber
    ) {
      alert("Please fill in all the fields before proceeding.");
      return;
    }

    localStorage.setItem("orderSummary", JSON.stringify(orderData));
    window.location.href = "./summary.html";
  });
});
