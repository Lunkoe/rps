const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', rpsGame));

function rpsGame(e) {
    let choices = ["Rock", "Paper", "Scissors"]

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let playerChoice = e.target;

    if (computerChoice != playerChoice.id) {
        playerChoice.classList.add("playerChoice");
        document.querySelector("#" + computerChoice).classList.add("computerChoice");
    } else {
        playerChoice.classList.add("both")
    }

    addText(playerChoice, computerChoice);
}

function addText(playerChoice, computerChoice) {
    const sentence = document.querySelector("#result");
    sentence.innerHTML = `You chose <b>${playerChoice.id}</b> <br> Computer chose <b>${computerChoice}</b>`;
}