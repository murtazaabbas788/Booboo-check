let messageIndex = 0;

const messages = [
  "Are you sure? 😏",
  "Think again, begum 😘",
  "Don’t break my heart 💔",
  "Come on booboo, say Yes ❤️",
  "You love me, I know 😍"
];

function moveNoButton() {
  const noButton = document.querySelector('.no-button');
  const container = document.querySelector('.container');

  const maxX = container.clientWidth - noButton.offsetWidth;
  const maxY = container.clientHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.3}px`;

  moveNoButton();
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
