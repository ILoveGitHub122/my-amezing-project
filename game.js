const quotes = [
  "Den största äran i att leva ligger inte i att aldrig falla, utan i att stiga varje gång vi faller.",
  "Sättet att komma igång är att sluta prata och börja göra.",
  "Din tid är begränsad, slösa inte bort den på att leva någon annans liv.",
  "Om livet var förutsägbart skulle det upphöra att vara liv och vara utan smak.",
  "Om du tittar på vad du har i livet, kommer du alltid att ha mer. Om du tittar på vad du inte har i livet kommer du aldrig att få nog."
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
