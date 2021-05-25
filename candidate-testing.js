const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "Jade" ;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "What is your name"?;
let correctAnswer = "candidateName";
let candidateAnswer = "candidateName";
let questions = "What is your name";
let correctAnswers = "candidateName";
let candidateAnswers = "candidateName";
let greeting = "Welcome!";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
input.question("What is your name?" + candidateName); {
  console.log(greeting ${candidateName});
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {
console.log("Hello" + name);
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  input.question("What is your name");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
