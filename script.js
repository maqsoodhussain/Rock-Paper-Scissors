let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");


const drawGame = ()=>{
    console.log("game draw");
}

const showWinner = (userwin)=>{
    if(userwin){
        console.log("You win");
    }else{
        console.log("YOu lose");
    }
}
const genCompChoice =()=>{
    //this 
    let options = ["rock","paper","scissors"];
    //math.random generate number b/w 0 to 1 
    const randomIdx = Math.floor(Math.random(options) * 3); //multiply 3 becacuse knows in 0 to 2 range if range from 0 to 9 we multiple 10 
    return options[randomIdx];
}

const playGame = (userChoice)=>{
    console.log("User Choice= ", userChoice);
    const compChoice  = genCompChoice();
    console.log("Comp Choice= ", compChoice);
   if(userChoice === compChoice){
      drawGame();
   }else{
    let userWin = true;
    if(userChoice ==="rock"){
        userWin = compChoice ==="paper" ? false:true;
    }else if(userChoice=="paper"){
        userWin = compChoice ==="scissors" ? false:true;
    }else{
        userWin = compChoice ==="rock"?false:true;
    }
    showWinner(userWin);
   }

};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})