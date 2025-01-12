const overAge = document.querySelector(".over-age");
const underAge = document.querySelector(".under-age");
const ageInfo = document.querySelector(".age-info");
const info = document.querySelector(".age-info-alert");
const ask = document.querySelector(".age-info-ask");

if (!sessionStorage.getItem("ageConfirmed")) {
  ageInfo.style.display = "flex";
} else {
  ageInfo.style.display = "none";
}

overAge.addEventListener("click", () => {
  sessionStorage.setItem("ageConfirmed", "true");
  ageInfo.style.display = "none";
});

underAge.addEventListener("click", () => {
  ask.style.display = "none";
  info.style.display = "none";
  overAge.style.display = "none";
  underAge.style.display = "none";

  const p = document.createElement("p");
  p.classList.add("age-info-reject");
  p.style.color = "red";
  p.textContent = "You are under 18, so you can not enter this page";

  const detailsContainer = document.querySelector(".age-info-details");
  detailsContainer.appendChild(p);

  setTimeout(() => {
    window.location.href = "https://www.google.com"; // Przekierowanie na stronę
  }, 5000);
});
