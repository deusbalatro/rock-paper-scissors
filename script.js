
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
const your_choice = document.getElementById("your-choice");
const computer_choice = document.getElementById("computer-choice");
const result_text = document.getElementById("result");
const human_score_element = document.getElementById("your-score");
const computer_score_element = document.getElementById("computer-score");
const restart_button = document.createElement("div");
const option_buttons = document.querySelectorAll(".option");
const content = document.querySelector(".content");
const scores_div = document.querySelector(".scores");

console.log(option_buttons);

restart_button.setAttribute("id", "restart-button-div");
restart_button.innerHTML = `<button>Restart</button>`;

restart_button.addEventListener("click", () => {
	restart_game();
});

rock_button.addEventListener("click", () => {
	playGame("rock")
});
paper_button.addEventListener("click", () => {
	playGame("paper")
});
scissors_button.addEventListener("click", () => {
	playGame("scissors")
});



function getComputerChoice()
{

	let choices = ['ROCK', 'PAPER', 'SCISSORS'];
	let choice = choices[Math.floor(Math.random()* 3)];

	return choice;
}

let computer_opt = "";
let human_score = 0;
let computer_score = 0;
let round = 0;


function playGame(option){

	computer_opt = getComputerChoice();

	
	playRound(option, computer_opt);
	your_choice.innerText = `Your Choice: ${option.toUpperCase()}`;
	computer_choice.innerText = `Computer Choice: ${computer_opt}`;	

	function playRound(human_choice, computer_choice){
		let human = human_choice.toUpperCase();
		let computer = computer_choice;
		if (computer === 'ROCK' && human === 'PAPER'||
			computer === 'PAPER' && human === 'SCISSORS' ||
			computer === 'SCISSORS' && human === 'ROCK')
		{
			human_score++;
			console.log(`You win! ${human} beats ${computer}`);
			result_text.innerText=`You win! ${human} beats ${computer}`
		}
		else if (computer == human){
			console.log(`Both choices are ${human}. Round tied. Scores are unaffected.`);
			result_text.innerText = `Both choices are ${human}. Round tied. Scores are unaffected.`;
		}
		else{
			console.log(`You lose! ${computer_choice} beats ${human_choice.toUpperCase()}`);
			result_text.innerText=`You lose! ${computer_choice} beats ${human_choice.toUpperCase()}`;
			computer_score++;
		}
		human_score_element.innerText = `Your Score: ${human_score}`;
		computer_score_element.innerText = `Computer Score: ${computer_score}`;
	}

	if (human_score === 5 || computer_score === 5){
	
		scores_div.appendChild(restart_button);
		Array.from(option_buttons).forEach((button) => {
			button.disabled = true;
		});
		if (human_score === 5)
		{
			result_text.innerText = "You win!";
		}
		else if (computer_score === 5)
		{
			result_text.innerText = "Game Over!";
		}
	}
}

function restart_game(){

	window.location.reload();

}
