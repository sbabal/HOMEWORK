//global variables

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title:
            "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        answer: "all of the above",
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log",
    },
]

var score = 0 //represents the users score
var quiestionCount = 0 //represents which question the user is on
var timer = 180 //represents the number of seconds in quiz

//functions

//initialize html with Jquery
// function showWelcomeScreen() {

// }

function startTime() {
    //every second decrease time by 1 -> 180 seconds
}

//show a question on screen
function showQuestion() {
    //show question at question "questionCount"
    //-> questions[questionCount]
}

function startQuiz() {
    //start time
    startTimer()

    //go thorugh every question starting at first question
    for (let i = 0; i < questions.length; i++) {
        showQuestion()
    }
}

//here we check the user answer
function checkAnswer(event) {
    /*update score, update timer*/
    //event.target.textContent <-holds the tesxt of  the button user clicks on

    var answer = event.target.textContent

    if (answer === questions[questionCount].answer) {
        score += 15
    } else {
        timer -= 10
    }

    //every time go to next question
    questionCount++

    showQuestion()
}

//events

//when user hits start button
$(".startBtn").on("click", startQuiz)

//event for when user hits an "answer" button (4 of for every question)
$(".answers").on("click", checkAnswer)

/*ENTRY POINT*/
//static html show welcome screen
// showWelcomeScreen()
