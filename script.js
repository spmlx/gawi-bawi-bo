// Computer 


// Math Random   

// Rock = 0
// Paper = 1
// Scissors = 2

//global variables
let humanScore = 0 
let computerScore = 0


function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber){
        case 0:
            alert("Computer Chose : ROCK")
            return 'ROCK'
    
        case 1:
            alert("Computer Chose : PAPER")
            return 'PAPER'
            
        case 2:
            alert("Computer Chose : SCISSORS")
            return 'SCISSORS'
            
        
    }

}

function getHumanChoice(){
    return humanInput = prompt("ROCK | PAPER | SCISSORS").toUpperCase()


}



function playRound(humanChoice,computerChoice){

    switch(humanChoice){                                   // SWITCH CASE FOR HUMAN CHOICE 

        case 'ROCK':                                       // IN CASE THAT HUMAN CHOSE ROCK

        switch (computerChoice){                           // WIWIL CREATE A SWITCH CASE THAT WILL GET THE COMPUTER CHOICE VALUE

            case 'ROCK':                                   // IF COMPUTER PICKS ROCK 
                alert("It's a Draw! Rock equals Rock!")
                break

            case 'PAPER':                                  // IF COMPUTER PICKS PAPER 
                alert("You Lose! Paper beats Rock!")
                break

            case 'SCISSORS':                               // IF COMPUTER PICKS SCISSORS
                alert("You Win! Rock beats Scissors!")
                break
        }

        // END OF HUMAN CHOICE FOR ROCK


        // ANOTHER CASE STATEMENT FOR HUMAN

        case 'PAPER':                                       // IN CASE THAT HUMAN CHOSE PAPER

        switch (computerChoice){                           // WI WILL CREATE A SWITCH CASE THAT WILL GET THE COMPUTER CHOICE VALUE

            case 'ROCK':                                   // IF COMPUTER PICKS ROCK 
                alert("You win! Paper beats Rock!")
                break

            case 'PAPER':                                  // IF COMPUTER PICKS PAPER 
                alert("It's a Draw! Paper equals Paper!")
                break

            case 'SCISSORS':                               // IF COMPUTER PICKS SCISSORS
                alert("You Lose! Scissors beat Paper!")
                break
        }

        // END OF HUMAN CHOICE FOR PAPER


        // ANOTHER CASE STATEMENT FOR HUMAN

        case 'SCISSORS':                                       // IN CASE THAT HUMAN CHOSE SCISSORS

        switch (computerChoice){                           // WI WILL CREATE A SWITCH CASE THAT WILL GET THE COMPUTER CHOICE VALUE

            case 'ROCK':                                   // IF COMPUTER PICKS ROCK 
                alert("You Lose! Rock beats Scissors!")
                break

            case 'PAPER':                                  // IF COMPUTER PICKS PAPER 
                alert("You Win! Scissors beat Paper!")
                break

            case 'SCISSORS':                               // IF COMPUTER PICKS SCISSORS
                alert("It's a Draw! Scissors equal Scissors!")
                break
        }

        // END OF HUMAN CHOICE FOR SCISSORS
    }



}


let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


playRound(humanSelection,computerSelection)
