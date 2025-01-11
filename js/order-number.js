const orderNumber = document.querySelector(".order-number");

function getRandomNumber() {
  let result = "";

  for (let i = 0; i <= 6; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    result += randomNumber;
  }
  return result;
}

orderNumber.innerHTML = `Your order number: ${getRandomNumber()}`;
orderNumber.style.color = "green";
