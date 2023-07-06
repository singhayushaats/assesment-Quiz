const questions=[
    {
        question:"Which of the following language was developed as the first purely object programming language?",
        answers:[
            {text:"Smalltalk",correct:true},
            {text:"C++",correct:false},
            {text:"kotlin",correct:false},
            {text:"Java",correct:false},
            ]

    },
    {
        question:"Who developed object-oriented programming?",
        answers:[
            {text:"Adele Goldberg",correct:false},
            {text:"Dennis Ritchie",correct:false},
            {text:"Alan Kay",correct:true},
            {text:"Andrea Ferro",correct:false},
            ]
    
    },
    {
        question:"Which of the following is not an OOPS concept?",
        answers:[
            {text:"Encapsulation",correct:false},
            {text:"Polymorphism",correct:false},
            {text:"Exception",correct:true},
            {text:"Abstraction",correct:false},
            ]
    
    },
    {
        question:"Which feature of OOPS described the reusability of code?",
        answers:[
            {text:"Abstraction",correct:false},
            {text:"Encapsulation",correct:false},
            {text:"polymorphism",correct:false},
            {text:"Inheritance",correct:true},
            ]
    
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect = selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;

    }
    else{
        selectBtn.classList.add("incorrect");
    }


    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML= "You scored "+ score + " out of " + questions.length ;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
});

startQuiz();

