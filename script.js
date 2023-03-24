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

  const commentForm = document.createElement("form");
  commentForm.classList.add("comment-form");
  const commentInput = document.createElement("input");
  commentInput.classList.add("comment-input");
  commentInput.type = "text";
  commentInput.placeholder = "Skriv en kommentar...";
  const commentButton = document.createElement("button");
  commentButton.classList.add("comment-button");
  commentButton.type = "submit";
  commentButton.textContent = "Kommentera";
  const commentList = document.createElement("ul");
  commentList.classList.add("comment-list");

  commentForm.addEventListener("submit", event => {
    event.preventDefault();
    const comment = commentInput.value;
    if (!comment) return;
    const newComment = document.createElement("li");
    newComment.textContent = comment;
    commentList.appendChild(newComment);
    commentInput.value = "";
  });

  newMessage.appendChild(messageText);
  newMessage.appendChild(likeButton);
  newMessage.appendChild(commentForm);
  commentForm.appendChild(commentInput);
  commentForm.appendChild(commentButton);
  newMessage.appendChild(commentList);

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

   const textarea = document.getElementById("textarea");

   textarea.addEventListener("keyup", function(event) {
   if (event.target.value.includes("#rykte")) {
    const message = document.createElement("div");
    message.textContent = event.target.value;
    message.classList.add("message1");
    document.body.appendChild(message);
    event.target.value = "";
  }
     
     // Skapa kommentarknapp
const commentButton = document.createElement("button");
commentButton.textContent = "Kommentera";
commentButton.addEventListener("click", () => {
  const commentInput = document.createElement("input");
  commentInput.setAttribute("type", "text");
  commentInput.setAttribute("placeholder", "Skriv din kommentar...");
  commentInput.classList.add("comment-input");

  const commentSubmit = document.createElement("button");
  commentSubmit.textContent = "Skicka";
  commentSubmit.classList.add("comment-submit");

  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");
  commentContainer.appendChild(commentInput);
  commentContainer.appendChild(commentSubmit);

  newMessage.appendChild(commentContainer);

  commentSubmit.addEventListener("click", () => {
    const commentText = commentInput.value;
    if (!commentText) return;

    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.textContent = commentText;
    commentContainer.appendChild(comment);
    commentInput.value = "";
  });
});

// Lägg till kommentarknapp bredvid gilla-knappen
const likeButton = document.createElement("button");
likeButton.textContent = "Gilla";
likeButton.classList.add("like-button");
likeButton.addEventListener("click", () => {
  likeButton.textContent = `Gillade (${parseInt(likeButton.textContent.split(" ")[1] || 0) + 1})`;
  messageBoard.appendChild(messageBoard.removeChild(newMessage));
});

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
buttonContainer.appendChild(likeButton);
buttonContainer.appendChild(commentButton);

newMessage.appendChild(messageText);
newMessage.appendChild(buttonContainer);
     
     // Hämta knappen
var btn = document.getElementById("settings-btn");

// Lägg till en klick-händelse till knappen
btn.addEventListener("click", function(){
	// Uppdatera sidan
	location.reload();
});


});
});
