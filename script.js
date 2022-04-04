// timer
function setTimer() {
    timeLeft = 30;
    var timeInterval = setInterval(function() {
        timeEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft <= 0 | secondsLeft == finalSecondsLeft | stopTimer) {
            clearInterval(timerInterval);
        }
        secondsLeft--;
    }, 1000);
}



// questions
var quizQuestions = [q1,q2,q3,q4];  
var q1 = {

    question: "1. What is harder to catch the faster you run?",
    choices: ['The sky', 'A car', 'Your Breath', 'Water'],
    answer: 'Your Breath',
},
var  q2 = {

    question: "2. What can one catch that is not thrown?",
    choices: ['Attention', 'A bullet', 'A cold', 'A basketball'],

}
var  q3 = {

    question: "3. If Mrs. Smith's rooster lays an egg in Mr. Brown's yard, who owns the egg?",
    choices: ['Nobody', 'Mr. Brown', 'The Rooster', 'Mrs. Smith'],
    answer: 'Nobody',

    
}
var  q4 = {

    question: "4. A man once said he went 35 days without sleep. How is that possbile?",
    choices: ['He took quick naps', 'He ran off adrenaline', 'He slept at night', 'Its not possible'],
    answer: 'He slept at night',    
}


var timeEl = document.querySelector(".time");
var secondsLeft = 0;
timeEl.textcontent = "Time: " + secondsLeft;
var finalSecondsLeft = 0;
var stopTimer = false

var title = document.querySelector("#prompt");
var startQuiz = document.querySelector("#start-quiz");
var choicesEl = document.querySelector(".choices");
choicesEl.setAttribute("style", "display: none");
var completonForm = document.querySelector(".completion-form");
completonForm.setAttribute("style", "display: none");
var completionAlert = document.querySelector("#completion-alert");
var initialsLabel = document.querySelector("#initials-label");
var playerInitials = document.querySelector("#player-initials");
var submitButton = document.querySelector("#submit-button");
var endChoices = document.querySelector(".end-choices");
endChoices.setAttribute("style", "display: none");
var goBack = document.querySelector("#go-back");
var clearScores = document.querySelector("#clear-scores");
var viewHighScores =document.querySelector("#view-highscores");
var scoreTitle = document.querySelector("#score-title");
scoreTitle.setAttribute("style", "display: none");

var questionEl = document.querySelector("#choice1");
var option1El = document.querySelector("#choice2");
var option2El = document.querySelector("#choice3");
var option3El = document.querySelector("#choice4");

var evalAlert = document.querySelector("#eval-alert");
evalAlert.setAttribute("style", "display: none");
var evalText = document.querySelector("#eval-text");
var playerStats = document.querySelector("#player-stats");
playerStats.setAttribute("style", "display: none");



var questionIndex = 0;
var i = 0;

var changeQuestion = function () {
    quizQuestion.textCOntent = questions[i].question;
    answer1.textContent = questions[i].answer1;
    answer1.textContent = questions[i].answer2;
    answer1.textContent = questions[i].answer3;
    answer1.textContent = questions[i].answer4;
};