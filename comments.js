// Find all the comment buttons
const commentButtons = document.querySelectorAll('.comment-button');

// Loop through each button and add click event listener
commentButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Show or hide the comment form
    this.parentElement.nextElementSibling.classList.toggle('show');
  });
});

// Find all the comment forms
const commentForms = document.querySelectorAll('.comment-form');

// Loop through each form and add submit event listener
commentForms.forEach(form => {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Get the comment input
    const commentInput = this.querySelector('.comment-input');
    // Get the comments container
    const commentsContainer = this.previousElementSibling;
    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = commentInput.value;
    // Append the new comment to the comments container
    commentsContainer.appendChild(newComment);
    // Clear the comment input
    commentInput.value = '';
    // Hide the comment form
    this.classList.remove('show');
  });
});
