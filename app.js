const cookieContainer = document.getElementById("cookie-container");
const cookieBtn = document.getElementById("cookie-btn");

cookieBtn.addEventListener("click", () => {
  cookieContainer.remove();
  // Spara information om att användaren har godkänt cookies
  localStorage.setItem("cookieAccepted", true);
});

// Visa cookies rutan om användaren inte har godkänt cookies
if (!localStorage.getItem("cookieAccepted")) {
  cookieContainer.style.display = "flex";
}

// Hämta knappen och popup-rutan
const showPopupButton = document.getElementById('showPopup');
const popup = document.getElementById('popup');

// Hämta stäng-knappen i popup-rutan
const closePopupButton = document.getElementById('closePopup');

// Visa popup-rutan när knappen klickas på
showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Stäng popup-rutan när stäng-knappen klickas på
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

  
