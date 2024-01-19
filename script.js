const questions = [
  {
  question:"which is larget animal in the wold?",
  answers:[
    {text:"Shark", correct:false},
    {text:"Blue whale ", correct:true},
    {text:"Elephant", correct:false},
    {text:"Giraffe", correct:false},
  ]
},
{
  question:"which is smallest country in the wold?",
  answers:[
    {text:"Vatican city", correct:true},
    {text:"Bhutan ", correct:false},
    {text:"Nepal", correct:false},
    {text:"Shri Lanka", correct:false},
  ]
},
{
  question:"which is larget desert in the wold?",
  answers:[
    {text:"Kalahari", correct:false},
    {text:"Gobi ", correct:false},
    {text:"Sahara", correct:true},
    {text:"Antartica", correct:false},
  ]
},
{
  question:"which is the smallest continent in the wold?",
  answers:[
    {text:"Asia", correct:false},
    {text:"Australia ", correct:true},
    {text:"Arctic", correct:false},
    {text:"Africa", correct:false}
  ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function  showQuestion(){
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  console.log('Current Question', currentQuestion);
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
} 

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons?.firstChild){
    answerButtons.removeChild(answerButtons?.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
 

  if(isCorrect){
    selectedBtn.classList.add("correct");
    Array.from(answerButtons?.children).forEach(button=>{
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
        score++;
        console.log('current Score', score);

      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }else{
    selectedBtn.classList.add("incorrect");
    Array.from(answerButtons?.children).forEach(button=>{
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
        console.log('current Score', score);
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
}

function  showScore(){
  resetState();
  questionElement.innerHTML = `You scrored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "play Again";
  nextButton.style.display = "block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}


nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});


startQuiz();










































/*




*/







