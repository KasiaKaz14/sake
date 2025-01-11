const overAge = document.querySelector(".over-age");
const underAge = document.querySelector(".under-age");
const ageInfo = document.querySelector(".age-info");
const info = document.querySelector(".age-info-alert");
const ask = document.querySelector(".age-info-ask");

// Sprawdź, czy użytkownik już potwierdził wiek w bieżącej sesji
if (!sessionStorage.getItem("ageConfirmed")) {
  // Jeśli użytkownik nie potwierdził jeszcze wieku, zapytanie o wiek będzie widoczne
  ageInfo.style.display = "flex";
} else {
  // Jeśli użytkownik potwierdził wiek, zapytanie o wiek jest ukryte
  ageInfo.style.display = "none";
}

overAge.addEventListener("click", () => {
  // Ustawienie flagi "ageConfirmed" w sessionStorage, aby zapytanie o wiek nie pojawiało się
  sessionStorage.setItem("ageConfirmed", "true");
  ageInfo.style.display = "none"; // Ukrycie zapytania o wiek
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

  // Przekierowanie na Google po 5 sekundach
  setTimeout(() => {
    // Nie usuwamy flagi "ageConfirmed" przed przekierowaniem, by zapytanie pojawiło się po powrocie
    window.location.href = "https://www.google.com"; // Przekierowanie na stronę
  }, 5000);
});
