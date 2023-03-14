const form = document.querySelector("#message-form");
const messageBoard = document.querySelector("#message-board");
let messageCount = 0;

form.addEventListener("submit", event => {
  event.preventDefault();
  
  const message = document.querySelector("#message").value;
  if (!message) return;
  
  const newMessage = document.createElement("div");
  newMessage.classList.add("message");
  
  const messageText = document.createElement("p");
  messageText.textContent = message;
  
  const likeButton = document.createElement("button");
  likeButton.textContent = "Gilla";
  likeButton.addEventListener("click", () => {
    likeButton.textContent = `Gillade (${parseInt(likeButton.textContent.split(" ")[1] || 0) + 1})`;
    messageBoard.appendChild(messageBoard.removeChild(newMessage));
  });
  
  newMessage.appendChild(messageText);
  newMessage.appendChild(likeButton);
  
  messageBoard.appendChild(newMessage);
  
  form.reset();
  
  messageCount++;

  if (messageCount === 1) {
    const postSection = document.querySelector('.post-section');
    const premiumButton = document.createElement('button');
    premiumButton.innerHTML = "Kolla på reklam";
    premiumButton.classList.add('premium-button');
    postSection.appendChild(premiumButton);

    const premiumText = document.createElement('p');
    premiumText.innerHTML = 'Du måste kolla på en 0:30 sekunders annons för att skriva ett meddelande';
    premiumText.classList.add('premium-text');
    postSection.appendChild(premiumText);

    premiumButton.addEventListener('click', () => {
      const popup = window.open("https://www.google.com/adsense", "popup", "width=500,height=500");

      setTimeout(() => {
        popup.close();
        postSection.removeChild(premiumButton);
        postSection.removeChild(premiumText);
      }, 30000);
    });
  }
});
