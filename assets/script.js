var scoreEl = document.getElementById("score")
var mainEl = document.getElementById("main")
var startButton = document.getElementById("start-button")
var highscoreButton = document.getElementById("highscore-button")
var submitscoreButton = document.getElementById("submit-button")
var initialsInput = document.getElementById("initials-input")

var score = 60;
var timerInterval;
var topScores = [];


startButton.addEventListener("click", function(event) {
    event.preventDefault;
    timerInterval = setTime();
    startButton.style.visibility = 'hidden';

    //replace this line with calling game function
    mainEl.textContent = "Question 1";
})



function sortTopScores(allScores) {
    const sortedScores = allScores.sort((a, b) => {
        if(a.score > b.score) {
            return 1
        }
        return -1
    })

    if(sortedScores.length < 3) {
        return sortedScores
    }

    const topThreeScores = sortedScores.slice(2)

    return topThreeScores
}

function setTime() {
    return setInterval(function() {
      score--;
      scoreEl.textContent = score;
     if(score === 0) {
        clearInterval(timerInterval);
        mainEl.textContent = "SCORE 0: Try Again"
      } 
    }, 1000);
}



function saveScore () {
    clearInterval(timerInterval)
    var currentScores = JSON.parse(localStorage.getItem("userscores")) || []
    var scoreSave = {
        player: initialsInput.value,
        score: score
    }
        currentScores.push(scoreSave)
        topScores = sortTopScores(currentScores)
        localStorage.setItem("userscores", JSON.stringify(currentScores))
    
}

submitscoreButton.addEventListener("click", function(event) {
    event.preventDefault
    saveScore()
} )

highscoreButton.addEventListener("click", function(event) {
    event.preventDefault;
    startButton.style.visibility = 'hidden';
    mainEl.textContent = "Highscores";
})
