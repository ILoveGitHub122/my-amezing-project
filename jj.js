const form = document.querySelector("#message-form");
const messageBoard = document.querySelector("#message-board");

form.addEventListener("submit", event => {
  event.preventDefault();
  
  const message = document.querySelector("#message").value;
  if (!message) return;
  
  const newMessage = document.createElement("div");
  newMessage.classList.add("message");
  newMessage.textContent = message;
  
  messageBoard.appendChild(newMessage);
  
  form.reset();
});
