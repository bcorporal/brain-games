
var currentTime = document.querySelector("#currentTime");
var questionChoiceEl = document.querySelector('#question-choice');
var submitButtonEl = document.querySelector("#submitInitials");
var scoresEl = document.querySelector("highScores");
var questionChoice = ;
var holdInterval = 0;
var clearInterval = 0;
var startButtonEl = document.getElementById(".startButton");

var questionContainer = document.getElementById("questions-container")
var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");



var timeLeft = 30;
var timeInterval = 0;
var results = 0;
var penalty = 5;
var score = 0;
var allScores = 0;
var highScores = [];
var initials = "";

var timeEl = document.getElementById('timer');

startButtonEl.addEventListener("click", function () {
    questionContainer.classList.remove("hidden")

}

// need a start button event click for timer 
// startButton.addEventListener("click", timer);
startButtonEl.addEventListener("click", timerStart);


function timer() {
    timeInterval = setInterval(function () {
        console.log(timeLeft)
        timeLeft--

        if (timeLeft > 0) {
        } else {
            timeEl.tectContent = '0';
            displayResults();
            clearInterval();
            displayMessage();
        }
        }, 1000);
    }
   



// function setTime() {
//     var timeInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = timeLeft + " seconds left";

    // if(secondsLeft === 0) {
    // clearInterval(timerInterval);   
    // sendMessage();


// questions




var questions = [ 
{            
question: "What is harder to catch the faster you run?",
answer1: "The sky",
answer2: "A car",
answer3: "Your Breath",
answer4: "Water",
correct: "Your breath",
    },
    {
question: "What can one catch that is not thrown?",
answer1: "Attention",
answer2: "A bullet",
answer3: "A cold",
answer4: "A basketball",
correct: "A cold",
    },
    {
question: "If Mrs. Smith's rooster lays an egg in Mr. Brown's yard, who owns the egg?",
answer1: "Nobody",
answer2: "Mr. Brown",
answer3: "The Rooster",
answer4: "Mrs Smith",
correct: "Nobody",
    },
    { 
question: "A man once said he went 35 days without sleep. How is that possbile?",
answer1: "He took quick naps",
answer2: "He ran off adrenaline",
answer3: "He slept at night",
answer4: "Its not possible",
correct: "He slept at night",
},
];

var index = 0;
var i = 0;



highScoresEl.addEventListener("click", viewHighScore);

// need to get the clock working when start button is clicked