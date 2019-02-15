var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_section = document.querySelector(".score-board");
const result_section = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices [randomNumber];
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_section.innerHTML = userChoice + " beats " + computerChoice + ". You Win!";
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow') , 700);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_section.innerHTML = computerChoice + " beats " + userChoice + ". You Lose!";
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 700);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_section.innerHTML = "You both chose " + userChoice + ". It's a Draw!";
    userChoice_div.classList.add('amber-glow');
    setTimeout(() => userChoice_div.classList.remove('amber-glow'), 700);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "rocklizard" :
        case "paperrock" :
        case "paperspock" :
        case "scissorspaper" :
        case "scissorslizard" :
        case "lizardpaper" :
        case "lizardspock" :
        case "spockscissors" :
        case "spockrock" :
            win(userChoice, computerChoice);
            break;
        case "rockpaper" :
        case "rockspock" :
        case "paperscissors" :
        case "paperlizard" :
        case "scissorsrock" :
        case "scissorsspock" :
        case "lizardrock" :
        case "lizardscissors" :
        case "spockpaper" :
        case "spocklizard" :
            lose(userChoice, computerChoice);
            break;
        case "rockrock" :
        case "paperpaper" :
        case "scissorsscissors" :
        case "lizardlizard" :
        case "spockspock" :
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
    lizard_div.addEventListener('click', () => game("lizard"));
    spock_div.addEventListener('click', () => game("spock"));
}

main();