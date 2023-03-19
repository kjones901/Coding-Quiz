var scoreEl = document.getElementById("score")
var mainEl = document.getElementById("main")
var startButton = document.getElementById("start-button")
var highscoreButton = document.getElementById("highscore-button")
var submitscoreButton = document.getElementById("submit-button")
var initialsInput = document.getElementById("initials-input")

var score = 60;


// init function
startButton.addEventListener("click", function(event) {
    event.preventDefault;
    setTime();
    startButton.style.visibility = 'hidden';

    //replace this line with calling game function
    mainEl.textContent = "Question 1";
})




// game function
// if else with a variable containing correct answer. Wrong answer "else statement" removes time from clock, shakes red, removes answer. Only move on when correct answer is selected.




function setTime() {
    var timerInterval = setInterval(function() {
      score--;
      scoreEl.textContent = score;
      if(userinput = true) {
        var finalScore = score;
        scoreEl.textContent = finalScore;
        return finalScore
      }
      else if(score === 0) {
        clearInterval(timerInterval);
        mainEl.textContent = "SCORE 0: Try Again"
      } 
    }, 1000);
}

// var scorelog = JSON.parse(localStorage.getItem("Scorelog")) || []
var userscores = {
    Player: initialsInput.value,
    Score: score}


function savescore () {
    localStorage.setItem("Scorelog", JSON.stringify(userscores))
    scorelog.push(userscores)
}

submitscoreButton.addEventListener("click", function(event) {
    event.preventDefault
    savescore()
} )

highscoreButton.addEventListener("click", function(event) {
    event.preventDefault;
    startButton.style.visibility = 'hidden';
    mainEl.textContent = "Highscores";
})


// highscoreButton.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     var hiScorePlayer = {
//         initials: initials.value,
//         userHiScore: finalScore.value
//     };
    
//     localStorage.setItem("", JSON.stringify(hiScorePlayer));
    
//     })
    
//     var userName = initials.value

//     hiScore = {userName: finalScore.value}