const questions = [ 
    {
        question: "how many seats are there in Sweden's parlament?",
        answers: [
            {text: "347", incorrect: false},
            {text: "348", incorrect: false},
            {text: "349", correct: true},
            {text: "350", incorrect: false},
        
         ],
    },

    {
        question: "how many partys is there in parlament 2024?",
        answers: [
            {text: "8", correct: true},
            {text: "9", incorrect: false},
            {text: "11", incorrect: false},
            {text: "12", incorrect: false},
        
         ],
        },

    {
        question: "What is the bigest party in Sweden's parlament?",
        answers: [
            {text: "The Moderate Party", incorrect: false},
            {text: "The Left Party", incorrect: false},
            {text: "The Sweden Democrats", incorrect: false},
            {text: "The Social Democratic Party", correct: true},
        
         ],
        },

    {
        question: "What is the smalest party in Sweden's parlament?",
        answers: [
            {text: "The Centre Party", incorrect: false},
            {text: "The Liberal Party", correct: true},
            {text: "The Green Party", incorrect: false},
            {text: "The Christian Democrats", incorrect: false},
        
         ],
        },
];

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answerbtn");
const nextBtn = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = guestions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    guestionElement.innerHTML = questionNum + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerHTML = answer.text;
        btn.classList.add("btn");
        answerBtns.appendChild("btn");

        if(answer.correct){
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer);

    });

}
    function resetState(){
        nextBtn.style.display = "none";
        while(answerBtns.firstChild){
            answerBtns.removeChild(answerBtns.firstChild);
        }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("inCorrect");
    }
    Array.from(answerBtns.children).forEach((btn) => {
        if(btn.dataset.correct === "true"){
            btn.classList.add(correct);
        }
        btn.disabaled = true;
    });
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});
function showResults() {
    questionElement.innerHTML = `Quiz Complete! you scored ${score} out of ${questions.length}.`;
nextBtn.style.display = "none";
}
//start the Quiz

startQuiz();
