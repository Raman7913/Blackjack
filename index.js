while (true) {
    let firstCard = Math.ceil(Math.random() * 10) + 1;
    let secondCard = Math.ceil(Math.random() * 10) + 1;

    let sum = firstCard + secondCard;
    console.log(`${firstCard} + ${secondCard} = ${sum}`);
    if (sum === 21) {
        console.log("🍻 You won Blackjack!!!");
        break;
    } else if (sum <= 21) {
        console.log("at least you didn't lose. Do you wanna pick again?");
        if (prompt("press Y or N") != "Y") {
            break;
        }
    } else {
        console.log("you lost!😭😭😭😭😭");
        break;
    }
}
