//Array of questions with answers
const questions = [ 
    {
        question: "how many seats are there in Sweden's parliament?",
        answers: [
            { text: "347", incorrect: false },
            { text: "348", incorrect: false },
            { text: "349", correct: true },
            { text: "350", incorrect: false },
        
         ],
         correctImage: "assets/correct.png",
         incorrectImage: "assets/incorrect.png",
    },

    {
        question: "how many partys is there in parliament 2024 ?",
        answers: [
            { text: "8", correct: true },
            { text: "9", incorrect: false },
            { text: "11", incorrect: false },
            { text: "12", incorrect: false },
        
         ],
         correctImage: "assets/correct.png",
         incorrectImage: "assets/incorrect.png",
        },

    {
        question: "What is the bigest party in Sweden's parliament?",
        answers: [
            { text: "The Moderate Party", incorrect: false },
            { text: "The Left Party", incorrect: false },
            { text: "The Sweden Democrats", incorrect: false },
            { text: "The Social Democratic Party", correct: true },
        
         ],
         correctImage: "assets/correct.png",
         incorrectImage: "assets/incorrect.png",
        },
    {
        question: "What is the smalest party in Sweden's parliament?",
        answers: [
            { text: "The Centre Party", incorrect: false },
            { text: "The Liberal Party", correct: true },
            { text: "The Green Party", incorrect: false },
            { text: "The Christian Democrats", incorrect: false },
        
         ],
         correctImage: "assets/correct.png",
         incorrectImage: "assets/incorrect.png",
        },

        {
            question: "who is the current Speaker of Sweden's parliament?",
            answers: [
                { text: "Magdalena Andersson", incorrect: false },
                { text: "Andreas Norlén", correct: true },
                { text: "Ulf Kristersson", incorrect: false },
                { text: "Jimmie Åkesson", incorrect: false },
            
             ],
             correctImage: "assets/correct.png",
         incorrectImage: "assets/incorrect.png",
            },
];
// DOM elements
const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answerbtn");
const nextBtn = document.getElementById("nextbtn");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");

//username and password section , feedback elements
const usernameInput = document.getElementById("username-input");
const startBtn = document.getElementById("start-btn");
const usernameSection = document.getElementById("username-section");
const passwordInput = document.getElementById("password-input")
const quizSection = document.getElementById("quiz-section");
const feedbackSection = document.getElementById("feedback");
const feedbackImg = document.getElementById("feedback-img");

let currentQuestionIndex = 0;
let score = 0;
let username = "";
let password = "";

// Start Quiz when Username is provided
 startBtn.addEventListener("click", () => {
    username = usernameInput.value.trim();
    password = passwordInput.value.trim();
    if(username && password) {
        usernameSection.classList.add("hidden");
        quizSection.classList.remove("hidden");
        startQuiz();
    } else{
        alert("Enter both username and password to start the quiz");
    }
 });

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

//display the cuttrent question and answer
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;
    
    questionElement.classList.add("fade-in");
    
    currentQuestion.answers.forEach((answer) => {
        const btn = document.createElement("button");
        btn.innerHTML = answer.text;
        btn.classList.add("btn");
        answerBtns.appendChild(btn);

        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener("click", selectAnswer);
    });
 }
 //reset for next question
    function resetState() {
        nextBtn.style.display = "none";
        feedbackSection.style.display = "none";
        while(answerBtns.firstChild){
            answerBtns.removeChild(answerBtns.firstChild);
        }
}

//sound files for correct and incorrect answers
const correctSound = new Audio('assets/correct.mp3');
const incorrectSound = new Audio('assets/incorrect.mp3');

function playSound(isCorrect) {
    if (isCorrect) {
        correctSound.play();
    } else {
        incorrectSound.play();
    }
}

//this part works when user selects an answer
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const currentQuestion = questions[currentQuestionIndex];

    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        feedbackImg.src = currentQuestion.correctImage;
    } else {
        selectedBtn.classList.add("inCorrect");
        feedbackImg.src = currentQuestion.incorrectImage;
    }
feedbackSection.style.display = "block";

    Array.from(answerBtns.children).forEach((btn) => {
        if(btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    nextBtn.style.display = "block";
}

//next button
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});
//show the quiz result
function showResults() {
    quizSection.classList.add("hidden");
    document.getElementById("result-section").classList.remove("hidden");
    resultText.innerHTML = `Quiz Complete! ${username}, you scored ${score} out of ${questions.length}`;
    restartBtn.style.display = "block";
     // here Shows the restart button when the quiz is complete
}
//reset or restart section
restartBtn.addEventListener("click", () => {
    document.getElementById("result-section").classList.add("hidden");
    usernameSection.classList.remove("hidden");
    usernameInput.value = "";
    passwordInput.nalue = "";
});