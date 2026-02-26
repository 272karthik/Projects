function rollDice() {

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").src = `dice${dice1}.png`;
    document.getElementById("dice2").src = `dice${dice2}.png`;

    let result = "";

    if (dice1 > dice2) {
        result = "🚩 Player 1 Wins!";
    } else if (dice2 > dice1) {
        result = "Player 2 Wins! 🚩";
    } else {
        result = "🤝 Draw!";
    }

    document.getElementById("result").innerText = result;
}
