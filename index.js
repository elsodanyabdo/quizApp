const questions = [
    {
        question: "wich is the  largest animal in the world?",
        answers: [
            {text: "shark" , correct: false},
            {text: "blue whele" , correct: true},
            {text: "elephant" , correct: false},
            {text: "giraffe" , correct: false}
        ]
    },{
        question: "wich is the smallest country in the world?",
        answers: [
            {text: "vitcan city" , correct: true},
            {text: "bhutan" , correct: false},
            {text: "nepal" , correct: false},
            {text: "shri lanka" , correct: false}
        ]
    },{
        question: "wich is the  largest desert in the world?",
        answers: [
            {text: "kalaharai" , correct: false},
            {text: "gobi" , correct: false},
            {text: "sahara" , correct: false},
            {text: "antarctica" , correct: true}
        ]
    },{
        question: "wich is the smallest continent in the world?",
        answers: [
            {text: "asia" , correct: false},
            {text: "australia" , correct: true},
            {text: "arctic" , correct: false},
            {text: "africa" , correct: false}
        ]
    }
]
// inatial myele from html
const question = document.getElementById("question");
const answers = document.getElementById("answer-buttons");
const nextBtn  = document.querySelector(".next-btn")

//inatial question ind and score

let currentQuestionIndex = 0;
let score = 0;


//start functionality of the app

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "next"
    showQuestions()
}

function showQuestions(){
    resatState()
    let currentQuestion = questions[currentQuestionIndex];
    let quetionsNumber = currentQuestionIndex + 1;
    question.innerHTML = quetionsNumber + "." + currentQuestion.question
    currentQuestion.answers.forEach(answer  => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answers.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct 
        }
        button.addEventListener("click" ,selectAnswer)
        
    });
}
function resatState(){
    nextBtn.style.display="none"
    while(answers.firstChild){
        answers.removeChild(answers.firstChild)
    }
}
function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
        
    }
    Array.from(answers.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
        })
    nextBtn.style.display = "block"
}
function showScore(){
    resatState();
    question.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display="block"

}
function handelNextBtn(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions()
    }else{
        showScore()
    }
}
nextBtn.addEventListener("click" , ()=>{
    if (currentQuestionIndex < questions.length) {
        handelNextBtn()
    }else{
        startQuize()
    }
})
startQuize()