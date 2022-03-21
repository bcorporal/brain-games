var score = 0;
var allScores = 0;
var timer = document.querySelector("#startTimer");
var currentTime = document.querySelector("#currentTime");
var questionsSection = document.querySelector("#questionsSection");
var questionChoice =
var timeLeft = 45;
var holdInterval = 0;
var penalty = 5;
var highScores = [];
var initials = "";
var nextButton = document.querySelector("nextButton");
var startButton = document.querySelector


// need a start button event click for timer 
startButton.addEventListener("click", timerBegin);



// questions

var questions = [ 
    {
question: 1            
question: "In Roman Numerals, how many hours are in a day?"
answer: "XXIV"
choices: ["XXIV", "XXVI", "XXIL", "XIXV"]
    },
    {
question: 2
question: "What can one catch that is not thrown?"
answer: "A cold"
choices: ["Attention", "A bullet", "A cold", "A Basketball"]
    },
    {
question: 3
question: "If Mrs. Smith's rooster lays an egg in Mr. Brown's yard, who owns the egg?"
answer: "Nobody"
choices: ["Mrs Smith", "Mr. Brown", "The Rooster", "Nobody"]
    }
    {
question: 4  
question: "A man once said he went 35 days without sleep. How is that possbile?"
answer: "He slept at night"
choices: ["He took naps", "He slept at night", "He ran off adrenaline", "Its not possible"]
}
];


// var timerEL = document.getElementById('clock');

// var timeLeft = 45;

// function setTime() {
//     var timeInterval = setInterval(function() {
//         secondsLeft--;
//     }
// }, 60);
// }


