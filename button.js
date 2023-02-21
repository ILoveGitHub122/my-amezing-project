const postSection = document.querySelector('.body.html');
const premiumButton = document.createElement('button');
premiumButton.innerHTML = "Upgrade to Premium";
premiumButton.classList.add('premium.html');
postSection.appendChild(premiumButton);

premiumButton.addEventListener('click', () => {
  window.location.href = "premium.html";
});
