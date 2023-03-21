var scoreEl = document.getElementById("score")
var mainEl = document.getElementById("main")
var startButton = document.getElementById("start-button")
var highscoreButton = document.getElementById("highscore-button")
var submitscoreButton = document.getElementById("submit-button")
var initialsInput = document.getElementById("initials-input")
var saveScoreScreen = document.getElementById("save-score")

var score = 60;
var timerInterval;
var topScores = [];

startButton.addEventListener("click", function (event) {
    event.preventDefault;
    setTime();
    startButton.style.visibility = 'hidden';
    question1.style.visibility = 'visible';
    
    //replace this line with calling game function
    mainEL.textContent = "Placeholder for question 1";
})


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

function sortTopScores(allScores) {
    var sortedScores = allScores.sort((a, b) => {
        if(a.score > b.score) {
            return 1
        }
        return -1
    })

    if(sortedScores.length < 3) {
        return sortedScores
    }
}

highscoreButton.addEventListener("click", function(event) {
    event.preventDefault;
    startButton.style.visibility = 'hidden';
    mainEl.textContent = "Highscores";
})



var question1 = document.getElementById("question-1")
var question2 = document.getElementById("question-2")
var question3 = document.getElementById("question-3")
var question4 = document.getElementById("question-4")
// Question #1

var correctAnswer = document.getElementById("q1a2")

correctAnswer.addEventListener("click", function () {
    question1.style.visibility = "hidden";
    question2.style.visibility = "visible";
})
var wrongAnswer1 = document.getElementById("q1a1")
wrongAnswer1.addEventListener("click", function () {
    score-5;
    wrongAnswer1.style.background = "red";
})
var wrongAnswer2 = document.getElementById("q1a3")
wrongAnswer2.addEventListener("click", function () {
    score-5;
    wrongAnswer2.style.background = "red";
})
var wrongAnswer3 = document.getElementById("q1a4")
wrongAnswer3.addEventListener("click", function () {
    score-5;
    wrongAnswer3.style.background = "red";
})

// Question #2
correctAnswer = document.getElementById("q2a3")
correctAnswer.addEventListener("click", function () {
    question2.style.visibility = "hidden";
    question3.style.visibility = "visible";
})
// Wrong Answers (1,2 & 4)
var wrongAnswer4 = document.getElementById("q2a1")
wrongAnswer4.addEventListener("click", function () {
    wrongAnswer4.style.background = "red";
})
var wrongAnswer5 = document.getElementById("q2a2")
wrongAnswer5.addEventListener("click", function () {
    wrongAnswer5.style.background = "red";
})
var wrongAnswer6 = document.getElementById("q2a4")
wrongAnswer6.addEventListener("click", function () {
    wrongAnswer6.style.background = "red";
})



// Question #3
correctAnswer = document.getElementById("q3a3")
correctAnswer.addEventListener("click", function () {
    question3.style.visibility = "hidden";
    question4.style.visibility = "visible";
})

var wrongAnswer7 = document.getElementById("q3a1")
wrongAnswer7.addEventListener("click", function () {
    wrongAnswer7.style.background = "red";
})
var wrongAnswer8 = document.getElementById("q3a2")
wrongAnswer8.addEventListener("click", function () {
    wrongAnswer8.style.background = "red";
})
var wrongAnswer9 = document.getElementById("q3a4")
wrongAnswer9.addEventListener("click", function () {
    wrongAnswer9.style.background = "red";
})


// Question #4
correctAnswer = document.getElementById("q4a1")
correctAnswer.addEventListener("click", function () {
    question4.style.visibility = "hidden";
    saveScoreScreen.style.visibility = "visible";
    clearInterval(timerInterval);
})

var wrongAnswer10 = document.getElementById("q4a2")
wrongAnswer10.addEventListener("click", function () {
    wrongAnswer10.style.background = "red";
})
var wrongAnswer11 = document.getElementById("q4a3")
wrongAnswer11.addEventListener("click", function () {
    wrongAnswer11.style.background = "red";
})
var wrongAnswer12 = document.getElementById("q4a4")
wrongAnswer12.addEventListener("click", function () {
    wrongAnswer12.style.background = "red";
})

