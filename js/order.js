document.addEventListener("DOMContentLoaded", () => {
  const goToSummaryButton = document.getElementById("goToSummary");

  const storedData = localStorage.getItem("orderSummary");

  if (storedData) {
    const orderData = JSON.parse(storedData);

    document.getElementById("shop").value = orderData.shop || "";
    document.getElementById("name").value = orderData.name || "";
    document.getElementById("surname").value = orderData.surname || "";
    document.getElementById("email").value = orderData.email || "";
    document.getElementById("phoneNumber").value = orderData.phoneNumber || "";
  }

  const saveDataToLocalStorage = () => {
    const orderData = {
      shop: document.getElementById("shop").value,
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
    };

    if (
      !orderData.shop ||
      !orderData.name ||
      !orderData.surname ||
      !orderData.email ||
      !orderData.phoneNumber
    ) {
      alert("Please fill in all the fields before proceeding.");
      return false;
    }

    localStorage.setItem("orderSummary", JSON.stringify(orderData));
    return true;
  };

  goToSummaryButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (saveDataToLocalStorage()) {
      window.location.href = "./summary.html";
    } else {
      window.location.href = "./offer.html";
    }
  });
});
