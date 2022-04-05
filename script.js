var q1 = {
    question: "1. What is harder to catch the faster you run?",
    choices: ['The sky', 'A car', 'Your Breath', 'Water'],
    answer: 'Your Breath',
};
var q2 = {
    question: "2. What can one catch that is not thrown?",
    choices: ['Attention', 'A bullet', 'A cold', 'A basketball'],
    answer: 'A cold',
};
var q3 = {
    question: "3. If Mrs. Smith's rooster lays an egg in Mr. Brown's yard, who owns the egg?",
    choices: ['Nobody', 'Mr. Brown', 'The Rooster', 'Mrs. Smith'],
    answer: 'Nobody',
};
var q4 = {
    question: "4. A man once said he went 35 days without sleep. How is that possbile?",
    choices: ['He took quick naps', 'He ran off adrenaline', 'He slept at night', 'Its not possible'],
    answer: 'He slept at night',
};
var quizQuestions = [q1,q2,q3,q4];

var timeEl = document.querySelector(".time");
var secondsLeft = 0;
timeEl.textcontent = "Time: " + secondsLeft;
var finalSecondsLeft = 0;
var stopTimer = false

var title = document.querySelector("#title");
var promptEl = document.querySelector("#prompt");
var startQuiz = document.querySelector("#start-quiz");
var choicesEl = document.querySelector(".choices");
choicesEl.setAttribute("style", "display: none");
var completionForm = document.querySelector(".completion-form");
completionForm.setAttribute("style", "display: none");
var completionAlert = document.querySelector("#completion-alert");
var initialsLabel = document.querySelector("#initials-label");
var playerInitials = document.querySelector("#player-initials");
var submitButton = document.querySelector("#submit-button");
var endChoices = document.querySelector(".end-choices");
endChoices.setAttribute("style", "display: none");
var goBack = document.querySelector("#go-back");
var clearScores = document.querySelector("#clear-scores");
var viewHighScores = document.querySelector("#view-highscores");
var scoreTitle = document.querySelector("#score-title");
scoreTitle.setAttribute("style", "display: none");

var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

var evalAlert = document.querySelector("#eval-alert");
evalAlert.setAttribute("style", "display: none");
var evalText = document.querySelector("#eval-text");
var playerStats = document.querySelector("#player-stats");
playerStats.setAttribute("style", "display: none");


// timer
function setTimer() {
    secondsLeft = 30;
    var timerInterval = setInterval(function() {
        timeEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft <= 0 | secondsLeft == finalSecondsLeft | stopTimer) {
            clearInterval(timerInterval);
        }
        secondsLeft--;
    }, 1000);
}

let j = 0;
function quizFunction(i) {
    j = i;
    choicesEl.setAttribute("style", "display: block");
    promptEl.textContent = quizQuestions[i].question;
    choice1.textContent = quizQuestions[i].choices[0];
    choice2.textContent = quizQuestions[i].choices[1];
    choice3.textContent = quizQuestions[i].choices[2];
    choice4.textContent = quizQuestions[i].choices[3];
}

function endIterateFunction() {
    if (j == quizQuestions.length - 1) {
        finalSecondsLeft = secondsLeft;
        promptEl.setAttribute("style", "display: none");
        choicesEl.setAttribute("style", "display: none");
        evalAlert.setAttribute("style", "display: none");
        completionForm.setAttribute("style", "display: none");
        completionAlert.textContent = "Game over! Your final score is " + finalSecondsLeft;
    } else if (j < quizQuestions.length - 1) {
        j++;
        quizFunction(j);
    }};

function addHighScore() {
    var existingScores = JSON.parse(localStorage.getItem("playerScores"));
    if (existingScores == null) existingScores = [];
    var highScore = {
        "initials": playerInitials.value,
        "score": finalSecondsLeft,
    };
    localStorage.setItem("highScore", JSON.stringify(highScore));
    existingScores.push(highScore);
    localStorage.setItem("playerScores", JSON.stringify(existingScores));
};

function highScoreTable() {
    var allScores = JSON.parse(localStorage.getItem("playerScores"));
    if (allScores == null) {
        allscores = [];
    };
    allScores.sort(function (a, b) {
        return parseFloat(b.score) - parseFloat(a.score);
    });
    playerStats.setAttribute("style", "display: block");

    var tHead = document.createElement('thead');
    var tRow = document.createElement('tr');
    var initialHeader = document.createElement('th');
    initialHeader.appendChild(document.createTextNode("Player"));
    var scoreHeader = document.createElement('th');
    scoreHeader.appendChild(document.createTextNode("Score"));

    tRow.appendChild(initialHeader);
    tRow.appendChild(scoreHeader);
    tHead.appendChild(tRow);

    playerStats.appendChild(tHead);

    var tBody = document.createElement('tbody');

    for (let i = 0; i < allScores.length; i++) {
        var tableEntry = document.createElement('tr');
        var initialData = document.createElement('td');
        initialData.appendChild(document.createTextNode(allScores[i].initials));
        var scoreData = document.createElement('td');
        scoreData.appendChild(document.createTextNode(allScores[i].score));
        tableEntry.appendChild(initialData);
        tableEntry.appendChild(scoreData);
        tBody.appendChild(tableEntry);
    }

    playerStats.appendChild(tBody);
}

    startQuiz.addEventListener("click", function() {
        title.setAttribute("style", "display: none");
        startQuiz.setAttribute("style", "display: none");
        setTimer();
    });
    // start quiz
    startQuiz.addEventListener("click", function() {
        let i = 0;
        quizFunction(i);
    })
    // evaluate responses
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("button") === true) {
            if (element.textContent == quizQuestions[j].answer) {
                evalAlert.setAttribute("style", "display: block");
                evalText.textContent = "Correct!";
                endIterateFunction();
            } else if (element.textContent != quizQuestions[j].answer) {
                evalAlert.setAttribute("style", "display: block");
                evalText.textContent = "Wrong.";
                secondsLeft = secondsLeft - 5;
                endIterateFunction();
            }
        }
    })
    // submit initials and score
    submitButton.addEventListener("click", function() {
        completionForm.setAttribute("style", "display: none");
        scoreTitle.setAttribute("style", "display: block");
        addHighScore();
        highScoreTable();
        endChoices.setAttribute("style", "display: block");
    })
    // go back to beginning of page
    goBack.addEventListener("click", function() {
        location.reload();
    })
    // clear scores from view and local storage
    clearScores.addEventListener("click", function() {
        localStorage.clear();
        playerStats.setAttribute("style", "display: none");
    })
    // view high scores
    viewHighScores.addEventListener("click", function() {
        stopTimer = true;
        title.setAttribute("style", "display: none");
        promptEl.setAttribute("style", "display: none");
        startQuiz.setAttribute("style", "display: none");
        choicesEl.setAttribute("style", "display: none");
        evalAlert.setAttribute("style", "display: none");
        scoreTitle.setAttribute("style", "display: block");
        playerStats.textContent = "";
        highScoreTable();
        endChoices.setAttribute("style", "display: block");
    });