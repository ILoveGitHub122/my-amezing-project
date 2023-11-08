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
  
