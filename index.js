const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')
let computerChoice
let userChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', handleClick));
function handleClick() {
    userChoice = this.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber === 1){
        computerChoice = 'rock';
    }
    if (randomNumber === 2){
        computerChoice = 'paper';
    }
    if (randomNumber === 3){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML= computerChoice;
}
function getResult(){
    if (userChoice===computerChoice){
        result='Draw'
    }
    if(userChoice==='rock' && computerChoice==='paper'){
        result='You Lose'
    }
    if(userChoice==='rock' && computerChoice==='scissors'){
        result='You Win'
    }
    if(userChoice==='paper' && computerChoice==='scissors'){
        result='You Lose'
    }
    if(userChoice==='paper' && computerChoice==='rock'){
        result='You Win'
    }
    if(userChoice==='scissors' && computerChoice==='rock'){
        result='You Lose'
    }
    if(userChoice==='scissors' && computerChoice==='paper'){
        result='You Win'
    }
    resultDisplay.innerHTML=result
}
