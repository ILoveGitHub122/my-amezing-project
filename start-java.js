const acceptBtn = document.getElementById("accept-btn");
const terms = document.getElementById("terms");

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("termsAccepted", true);
  window.location.href = "body.html"; // Länk till ny sida
});

if (localStorage.getItem("termsAccepted")) {
  terms.style.display = "none";
} else {
  terms.style.display = "block";
}
