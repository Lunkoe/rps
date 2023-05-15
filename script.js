const buttons = document.querySelectorAll("button");


console.log(buttons);


buttons.forEach(button => button.addEventListener('click', rpsGame));

function rpsGame() {

    buttons.forEach(button => button.classList = "");

    let choices = ["Rock", "Paper", "Scissors"]

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let playerChoice = this;

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