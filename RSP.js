//------------------------------------------Defining Variables To Access HTML Elements-----------------------------------------
const yourScore = document.querySelector(".yourScore");
const compScore = document.querySelector(".compScore");
const playBtn = document.querySelector(".playBtn");
const yourTurn = document.querySelector(".yourTurn");
const compTurn = document.querySelector(".compTurn");
const userInput = document.querySelector(".userInput");
const placeBtn = document.querySelector(".placeBtn");
const hideUI = document.querySelectorAll(".hideUI");
const winTag = document.querySelector(".winTag");
const gameLimiter = document.querySelector(".gameLimiter");
const gameLimiterDiv = document.querySelector(".setGameLimit");
const setBtn = document.querySelector(".setBtn");

//----------------------------------------------Declaring Events To Buttons-----------------------------------------------------
placeBtn.addEventListener('click', ()=>{
    setTimeout(mainGame , 2000);
    yourTurn.src = "transition.gif"
    compTurn.src = "transition.gif"
    
    placeBtn.innerHTML="Place Again";
    placeBtn.style.fontSize = "10px"
},true);

playBtn.addEventListener('click',()=>{
    gameLimiter.classList.toggle("hideUI");
    setBtn.classList.toggle("hideUI");
    playBtn.classList.toggle("hideUI");
},true)

winTag.addEventListener('click',()=>{
    winTag.classList.toggle("hideUI");
    uiToggle();
},true);

setBtn.addEventListener("click",()=>{
    gameLimiterDiv.classList.toggle("hideUI");
    uiToggle();
    gameLimiter.classList.toggle("hideUI");
    setBtn.classList.toggle("hideUI");
    setGameLimit();
},true);

//---------------------------Declaring And Defining Game Functions-------------------------------------
function getPlayerInput(){
    const playerInput = userInput.value.toLowerCase();
    console.log(playerInput);
}

function setGameLimit(){
    const maxScore = gameLimiter.value;
    console.log(maxScore);
    if(yourScore.innerHTML === maxScore){
        upadteWinTag("You Won the Game" , "green");
        winTag.classList.toggle("hideUI"); 
        yourScore.innerHTML = 0;
        compScore.innerHTML =0;
       }
       else if(compScore.innerHTML === maxScore){
        upadteWinTag("You LosT the Game" , "red");
        winTag.classList.toggle("hideUI"); 
        compScore.innerHTML =0;
        yourScore.innerHTML = 0;
       }
}

function uiToggle(){
    userInput.classList.toggle("hideUI");
    placeBtn.classList.toggle("hideUI");
}
function upadteWinTag(message , color){
    winTag.classList.toggle("hideUI");                                                 
    winTag.innerHTML = message;
    winTag.style.backgroundColor = color;
}

function mainGame(){
    const yourNumber = Math.floor(Math.random() * 3) + 1;
    const compNumber = Math.floor(Math.random() * 3) + 1;
    const playerInput = userInput.value.toLowerCase();
    //Defining Images Acc To User Inputs
    if(playerInput == "rock"){
        yourTurn.src = "rock.png";
    }
    else if(playerInput == "paper"){
        yourTurn.src = "paper.png";
    }
    else if(playerInput == "scissor"){
        yourTurn.src = "scissor.png";
    }
    else if(playerInput == ""){
        alert("Input is emptyyy");
    }
    else{
        alert("Invalid Input");
    }
    //Defining Images Acc To Computer
    if(compNumber == 1){
        compTurn.src = "rock.png";
        console.log(compNumber);
    }
    else if(compNumber == 2){
        compTurn.src = "paper.png";
        console.log(compNumber);
    }
    else{
        compTurn.src = "scissor.png";
        console.log(compNumber);
    }

    gameRules(playerInput , compNumber);
}

let i=0,j=0;
function gameRules(move1 , move2){
//Defining Game Rules
   if((move1 == "rock" && move2 == 1)||
      (move1 == "paper" && move2 == 2)||
      (move1 == "scissor" && move2 == 3)){
    console.log("Tie");
    uiToggle();
    upadteWinTag("Tie" , "yellow")
   }
    //Tie
   else if(move1 === "rock" && move2 === 2){                         //rock - 1 , paper - 2 ,scissor - 3
    //You Lose rock  
    //Comp won paper 
    j++; 
    uiToggle();
    upadteWinTag("You Loose!!" , "red");
    compScore.innerHTML = j;                                                          
   }
   else if(move1 === "rock" && move2 === 3){ 
    //You won rock
    i++;
    uiToggle();
    upadteWinTag("You Won","green");
    yourScore.innerHTML = i;
    //Comp loose Scissor
   }
   else if(move1 === "paper" && move2 === 1){ 
    //You won paper
    i++;
    uiToggle();
    upadteWinTag("You Won","green");
    yourScore.innerHTML = i;
    //Comp loose Rock
   }
   else if(move1 === "paper" && move2 === 3){ 
    //Your lose paper
    //Comp won scissor
    j++;
    uiToggle();
    upadteWinTag("You Loose!!" , "red");
    compScore.innerHTML = j;
   }
   else if(move1 === "scissor" && move2 === 1){ 
    //You lose scissor
    //Comp won rock
    j++;
    uiToggle();
    upadteWinTag("You Loose!!" , "red");
    compScore.innerHTML = j;
   }
   else if(move1 === "scissor" && move2 === 2){ 
    //You won scissor
    i++;
    uiToggle();
    upadteWinTag("You Won","green");
    yourScore.innerHTML = i;
    //comp loose paper
   }
   setGameLimit();
}