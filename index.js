let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const startBtn = document.querySelector(".start-btn");
const messageEl = document.querySelector("#message-el");
const cardsEl = document.querySelector(".cards");
const sumEl = document.querySelector(".sum-el");
const newEl = document.querySelector(".new");

startBtn.addEventListener("click", startGame);
newEl.addEventListener("click", newCard);

function startGame() {
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    isAlive = true;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards:";
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i];
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo? You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomNumber();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

function getRandomNumber() {
    //get random number between 1 and 13 inclusive
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}
