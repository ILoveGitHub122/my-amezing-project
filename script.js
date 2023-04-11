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

    // Generera en slumpmässig kod i formatet "ABC#123".
function generateCode() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var code = '';

  for (var i = 0; i < 3; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  code += '#';

  for (var i = 0; i < 3; i++) {
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return code;
}

// Hämta kod från webbläsarens lokal lagring, om det finns en sparad.
var code = localStorage.getItem('code');

if (!code) {
  // Om det inte finns någon sparad kod, generera en ny och spara den.
  code = generateCode();
  localStorage.setItem('code', code);
}

// Visa koden på sidan.
var codeElement = document.getElementById('code');
codeElement.innerHTML = code;


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

  // Lägg till en kommentarsformulär och en gilla-knapp
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  buttonContainer.appendChild(likeButton);

  // Lägg till en klickhändelse till kommentera-knappen
  commentButton.addEventListener("click", () => {
    if (commentForm.style.display === "none" || !commentForm.style.display) {
      commentForm.style.display = "block";
    } else {
      const commentText = commentInput.value;
      if (!commentText) return;

      const newComment = document.createElement("li");
      newComment.textContent = commentText;
      commentList.appendChild(newComment);
      commentInput.value = "";
    }
  });

  buttonContainer.appendChild(commentButton);
  newMessage.appendChild(buttonContainer);
  commentForm.appendChild(commentInput);
  commentForm.appendChild(commentButton);
  newMessage.appendChild(commentForm);
  newMessage.appendChild(commentList);

  messageBoard.appendChild(newMessage);

  form.reset();

  // Generera en slumpmässig kod i formatet "ABC#123".
function generateCode() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var code = '';

  for (var i = 0; i < 3; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  code += '#';

  for (var i = 0; i < 3; i++) {
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return code;
}

// Hämta kod från webbläsarens lokal lagring, om det finns en sparad.
var code = localStorage.getItem('code');

if (!code) {
  // Om det inte finns någon sparad kod, generera en ny och spara den.
  code = generateCode();
  localStorage.setItem('code', code);
}

// Visa koden på sidan.
var codeElement = document.getElementById('code');
codeElement.innerHTML = code;

function copyCode() {
  let code = document.getElementById("code").textContent;
  navigator.clipboard.writeText(code);
  alert("Koden är kopierad!");
  let userId = getUserId(); // anropar en funktion för att hämta användar-ID
  location.href = "/users/" + userId;
}

function getUserId() {
  return fetch('/api/user') // anpassa sökvägen till din API-endpoint
    .then(response => response.json())
    .then(data => {
      return data.userId;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function hideCode() {
  let hideBtn = document.getElementById("hideBtn");
  let addFriendBtn = document.getElementById("addFriendBtn");
  let code = document.getElementById("code");
  hideBtn.style.display = "none";
  addFriendBtn.style.display = "none";
  code.style.display = "none";
}


});

