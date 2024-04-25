const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {

}
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What tense is used to talk about permanent states and routine actions?",
    choice1: "Present Simple",
    choice2: "Present Continuous",
    choice3: "Present Perfect Simple",
    choice4: "Present Perfect Continuous",
    answer: 1
  },
  {
    question: "What tense is used to talk about life experience, such as visiting other countries, trying specific foods, etc.?",
    choice1: "Present Simple",
    choice2: "Present Continuous",
    choice3: "Present Perfect Simple",
    choice4: "Present Perfect Continuous",
    answer: 3
  },
  {
    question: "What tense is used to talk about planned arrangements, especially involving other people and/or having specific dates and time?",
    choice1: "Present Simple",
    choice2: "Present Continuous",
    choice3: "Present Perfect Simple",
    choice4: "Present Perfect Continuous",
    answer: 2
  },
]

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach( choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

choices.forEach( choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    getNewQuestion();
  })
}
)

startGame();