const question = [ 
    {
        question: "how many seats are there in Sweden's parliament?",
        answers: [
            {text: "347", correct:false},
            {text: "348", correct:false},
            {text: "349", correct:true},
            {text: "350", correct:false},
        
         ]
    };

    {
        question: "how many partys is there in parlament 2024?",
        answers: [
            {text: "8", correct:true},
            {text: "9", correct:false},
            {text: "11", correct:false},
            {text: "12", correct:false},
        
         ]
    };

    {
        question: "What is the bigest party in Sweden's parlament?";
        answers: [
            
            {text: "The Moderate Party", correct:false},
            {text: "The Left Party", correct:false},
            {text: "The Sweden Democrats", correct:false},
            {text: "The Social Democratic Party", correct:true},
        
         ]
    };

    {
        question: "What is the smalest party in Sweden's parlament?",
        answers: [
            {text: "The Centre Party", correct:false},
            {text: "The Liberal Party", correct:true},
            {text: "The Green Party", correct:false},
            {text: "The Christian Democrats", correct:false},
        
         ]
    },
];

const questionElements = document.getElementById("question");
const answerbtns = document.getElementById("answerbtn");
const nextbtn = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score =0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = guestions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    guestionElement.innerHTML = guestionNum + "." + currentQuestion.guestion;

    currentQuestion.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerHTML = answer.text;
        btn.classList.add("btn");
        answerbtns.appendChild("btn");
        if( answer.correct){
            btn.dataset.correct = answer.text;
        }
        btn.addEventListener('click', selectAnswer);

    });
    }
    function resetState(){
        nextBtn.style.display = "none";
        while(answerBtns.firstChild){
            answerBtns.removeChild(answerBtns.firstChild)
        }
    }
