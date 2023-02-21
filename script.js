const form = document.querySelector("#message-form");
const messageBoard = document.querySelector("#message-board");

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
  
  const postSection = document.querySelector('.post-section');
  const premiumButton = document.createElement('button');
   premiumButton.innerHTML = "Upgrade to Premium";
   premiumButton.classList.add('premium-button');
   postSection.appendChild(premiumButton);

   premiumButton.addEventListener('click', () => {
   window.location.href = "premium.html";
   });

});
