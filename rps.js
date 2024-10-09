let humanScore = 0 ;
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
		return 'cisor' ;
	}
}

function getUserChoice() {
	let user_choice = prompt("Rock, Paper, Cisor").toLowerCase() ;

	if (user_choice == "rock" || user_choice == "paper" || user_choice == "cisor") {
		return user_choice ;
	}

	else {
		console.log("Please write your choice between rock, paper and cisor") ;
	}	
}


function playRound() {
	let user_choice = getUserChoice() ;
	let computer_choice = getComputerChoice() ;

	switch (true) {
	case (user_choice == "rock" && computer_choice == "paper") :
		console.log("You lose ! Paper beats rock") ;
		computerScore += 1 ;
		break ;

	case (user_choice == "paper" && computer_choice == "paper") :
		console.log("Draw !") ;
		computerScore += 0.5 ;
		humanScore += 0.5;
		break ;

	case (user_choice == "cisor" && computer_choice == "paper") :
		console.log("You Win ! Cisor beats paper") ;
		humanScore += 1 ;
		break ;

	case (user_choice == "rock" && computer_choice == "rock") :
		console.log("Draw !") ;
		computerScore += 0.5 ;
		humanScore += 0.5;
		break ;

	case (user_choice == "paper" && computer_choice == "rock") :
		console.log("You Win ! Paper beats rock") ;
		humanScore += 1;
		break ;

	case (user_choice == "cisor" && computer_choice == "rock") :
		console.log("You lose ! rock beats cisor") ;
		computerScore += 1 ;
		break ;

	case (user_choice == "rock" && computer_choice == "cisor") :
		console.log("You Win ! rock beats cisor") ;
		humanScore += 1;
		break ;

	case (user_choice == "paper" && computer_choice == "cisor") :
		console.log("You Lose! cisor beats paper") ;
		computerScore += 1 ;
		break ;

	case (user_choice == "cisor" && computer_choice == "cisor") :
		console.log("Draw !") ;
		computerScore += 0.5 ;
		humanScore += 0.5;
		break ;
	}
}