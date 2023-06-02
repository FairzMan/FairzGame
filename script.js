const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultMessage = document.getElementById('resultMessage');
const resetButton = document.getElementById('resetButton');

let targetNumber;
let attempts;

function startGame() {
  targetNumber = Math.floor(Math.random() * 50) + 1;
  attempts = 5;
  resultMessage.textContent = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessButton.disabled = false;
}

function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
    showResultMessage('Tolong masukkan angka yang valid.');
    return;
  }

  attempts--;

  if (userGuess === targetNumber) {
    showResultMessage('Hebat😱 kok kamu bisa tau sih.');
    disableUserInput();
  } else if (attempts > 0) {
    const hint = userGuess < targetNumber ? 'lebih tinggi' : 'lebih rendah';
    showResultMessage(`Salah! Coba tebak dengan angka yang ${hint}! Kesempatanmu sisa ${attempts} lagi.`);
  } else {
    showResultMessage(`Kamu kalah! Jawaban yang benarnya adalah ${targetNumber}.`);
    disableUserInput();
  }

  guessInput.value = '';
  guessInput.focus();
}

function showResultMessage(message) {
  resultMessage.textContent = message;
}

function disableUserInput() {
  guessInput.disabled = true;
  guessButton.disabled = true;
}

resetButton.addEventListener('click', startGame);
guessButton.addEventListener('click', checkGuess);

startGame();

  document.getElementById("kembali").addEventListener("click", function() {
  window.location.href = "index.html";
});
