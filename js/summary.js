const orderData = JSON.parse(localStorage.getItem("orderSummary"));

if (orderData) {
  console.log("Order data loaded:", orderData);

  document.getElementById("orderSummary").innerHTML = `
    <li>Shop: ${orderData.shop}</li>
    <li>Name: ${orderData.name}</li>
    <li>Surname: ${orderData.surname}</li>
    <li>Email: ${orderData.email}</li>
    <li>Phone Number: ${orderData.phoneNumber}</li>
  `;
} else {
  window.location.href = "./order.html";
}
