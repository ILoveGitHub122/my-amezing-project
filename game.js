const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
  "Your time is limited, don't waste it living someone else's life.",
  "If life were predictable it would cease to be life, and be without flavor.",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
];

let quoteIndex, startTime;

const quoteElement = document.getElementById('quote');
const userInputElement = document.getElementById('user-input');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', () => {
  startGame();
});

function startGame() {
  quoteIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[quoteIndex];
  userInputElement.value = '';
  userInputElement.focus();
  resultElement.innerText = '';
  startButton.style.display = 'none';
  startTime = new Date().getTime();
}

userInputElement.addEventListener('input', () => {
  const quote = quotes[quoteIndex];
  const userInput = userInputElement.value;

  if (userInput === quote) {
    const elapsedTime = new Date().getTime() - startTime;
    const seconds = (elapsedTime / 1000).toFixed(2);
    const wpm = calculateWpm(quote, seconds);
    resultElement.innerText = `You typed the quote in ${seconds} seconds at a speed of ${wpm} words per minute!`;
    startButton.style.display = 'block';
  }
});

userInputElement.addEventListener('paste', (e) => {
  e.preventDefault();
});

function calculateWpm(quote, seconds) {
  const words = quote.split(' ').length;
  const wpm = (words / (seconds / 60)).toFixed(0);
  return wpm;
}
