
let choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice()
{
	let choice = choices[Math.floor(Math.random()* 3)];

	return choice;
}

function getHumanChoice(){
	let choice = prompt("Write your choice");
	return choice;
}

function playGame(){


	let human_choice = "";
	let computer_choice = "";
	let human_score = 0;
	let computer_score = 0;
	let round = 0;


	let counter = 0;
	if (counter < 5)
	{
		while(counter < 5){
			playRound(getHumanChoice(), getComputerChoice());
			counter++;
		}
	} 
	if (counter === 5){
		console.log(`Your score: ${human_score}\nComputer Score: ${computer_score}`);
		let x = prompt("Play again?");
		if (x === 'y')
			playGame();
	}


	function playRound(human_choice, computer_choice){
		let human = human_choice.toUpperCase();
		let computer = computer_choice;
		if (computer === 'ROCK' && human === 'PAPER'||
			computer === 'PAPER' && human === 'SCISSORS' ||
			computer === 'SCISSORS' && human === 'ROCK')
		{
			human_score++;
			console.log(`You win! ${human} beats ${computer}`);
		}
		else if (computer == human){
			console.log(`Both choices are ${human}. Round tied. Scores are unaffected.`);
		}
		else{
			console.log(`You lose! ${computer_choice} beats ${human_choice.toUpperCase()}`);
			computer_score++;
		}
	}

}

playGame();
