document.addEventListener("DOMContentLoaded", () => {
  const goToSummaryButton = document.getElementById("goToSummary");

  goToSummaryButton.addEventListener("click", () => {
    // Pobierz dane z formularza
    const orderData = {
      shop: document.getElementById("shop").value,
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
    };

    // Walidacja danych - wszystkie pola muszą być wypełnione
    // if (!shop || !name || !surname || !email || !phoneNumber) {
    //   alert("Please fill in all the fields before proceeding.");
    //   return;
    // }

    // Zapisz dane w localStorage
    localStorage.setItem("orderSummary", JSON.stringify(orderData));

    // Przejdź do podsumowania
    window.location.href = "./summary.html";
  });

  // Sprawdź, czy dane zamówienia istnieją w localStorage
  const storedData = localStorage.getItem("orderSummary");

  if (storedData) {
    const orderData = JSON.parse(storedData);

    // Wypełniaj formularz danymi z localStorage
    document.getElementById("shop").value = orderData.shop;
    document.getElementById("name").value = orderData.name;
    document.getElementById("surname").value = orderData.surname;
    document.getElementById("email").value = orderData.email;
    document.getElementById("phoneNumber").value = orderData.phoneNumber;
  }
});
