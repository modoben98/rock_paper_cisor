let userScore = 0 ;
let computerScore = 0 ;


function getComputerChoice() {
	let rand_number = Math.random() ;
	if (rand_number < 0.33) {
		return 'rock';
	}
	else if (rand_number < 0.66) {
		return 'paper' ;
	}

	else {
		return 'scisor' ;
	}
}

function getUserChoice() {
	let user_choice = prompt("Rock, Paper, Scisor").toLowerCase() ;

	if (user_choice == "rock" || user_choice == "paper" || user_choice == "scisor") {
		return user_choice ;
	}

	else {
		console.log("Please write your choice between rock, paper and scisor") ;
	}	
}


function playRound(user_choice) {
	
	let computer_choice = getComputerChoice() ;

	switch (true) {
	case (user_choice == "rock" && computer_choice == "paper") :
		console.log("You lose ! Paper beats rock") ;
		computerScore += 1 ;
		break ;

	case (user_choice == "paper" && computer_choice == "paper") :
		console.log("Draw !") ;
		computerScore += 0.5 ;
		userScore += 0.5;
		break ;

	case (user_choice == "scisor" && computer_choice == "paper") :
		console.log("You Win ! SCisor beats paper") ;
		userScore += 1 ;
		break ;

	case (user_choice == "rock" && computer_choice == "rock") :
		console.log("Draw !") ;
		computerScore += 0.5 ;
		userScore += 0.5;
		break ;

	case (user_choice == "paper" && computer_choice == "rock") :
		console.log("You Win ! Paper beats rock") ;
		userScore += 1;
		break ;

	case (user_choice == "scisor" && computer_choice == "rock") :
		console.log("You lose ! rock beats scisor") ;
		computerScore += 1 ;
		break ;

	case (user_choice == "rock" && computer_choice == "scisor") :
		console.log("You Win ! rock beats scisor") ;
		userScore += 1;
		break ;

	case (user_choice == "paper" && computer_choice == "scisor") :
		console.log("You Lose! Scisor beats paper") ;
		computerScore += 1 ;
		break ;

	case (user_choice == "scisor" && computer_choice == "scisor") :
		console.log("Draw !") ;
		computerScore += 0.5 ;
		userScore += 0.5;
		break ;
	}
}


const buttons = document.querySelectorAll("button");

const userScoreNode = document.querySelector(".user .score")
const computerScoreNode = document.querySelector(".computer .score")

buttons.forEach((button) => {
	button.addEventListener("click", function() {
		playRound(button.id);
		userScoreNode.textContent = userScore;
		computerScoreNode.textContent = computerScore;
	});
})

