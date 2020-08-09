// start quiz hides button, calls display question function, and calls starts timmer funtion
// funtion displayQuestion Displays the questions and choices
// $(document).ready(function() {


const questions = [
      {
            question: 'What is the color of the sky?', 
            answers: 'the sky is blue',
            choice: ['the sky is red', 'the sky is blue', 'the sky is green', 'the sky is brown']
      },
      {
            question: 'What sound does a dog make?', 
            answers: 'Woof',
            choice: ['Quack', 'Moo', 'Roar', 'Woof']
      },
      {
            question: 'How many apples is a dozen?', 
            answers: '12',
            choice: ['8', '12', '4', '9']
      },
      {
            question: 'What is the color of milk?', 
            answers: 'White',
            choice: ['Purple', 'White', 'Orange', 'Red']
      },
      {
            question: 'What type of shape is a tire?', 
            answers: 'Circle',
            choice: ['Circle', 'Square', 'Triangle', 'Hexagon']
      },
      {
            question: 'What do people drink?', 
            answers: 'Water',
            choice: ['Sand', 'Air', 'Metal', 'Water']
      },
];

var currentQuestion = 0;
var currentAnswer = 0;
var right = 0;
var wrong = 0;
var position = 0;
let index = 0;
// console.log(position);
// const displayQ = displayQuestions();
// const displayA = disp

function startQuiz() {
      const testInstructions = alert('Please make sure to answer before 100');
      const $instructions = $('#instructions');
      $instructions.text('Choose an answer:');
      const $test = $('#questionAnswers');

      // addind a timer
      let $timer = $('<div>');
      $timer.addClass('timer');
      $test.append($timer);


      // creating a new div for generated questions
      let $newQuestion = $('<div>');
      $newQuestion.addClass('questionss');
      $test.append($newQuestion);

      // // adding the submit buttom
      const submit = $('<div>');
      submit.addClass('answers');
      $test.append(submit);

      var timeLeft = 100;
      var timerInterval = setInterval(function() {
            timeLeft--;
            $timer.text("Time left: " + timeLeft);
    
            if(timeLeft === 0) {
              clearInterval(timerInterval);
              showScore();
            }
          }, 1000);
      $('.timer').append(timerInterval);


      createQuestion(position);
      createAnswers(position);

}

function createQuestion() {
      $('.questionss').empty();
      const $testQuestion = $('<p>');
      $testQuestion.addClass('testQuestion');
      $testQuestion.text(questions[index].question);
      $('.questionss').append($testQuestion);
}

function createAnswers() {
      $('.answers').empty();
      //empty previous buttons
      //make 4 answer buttons that each have
      for (var i = 0; i < 4; i++) {
            const $buttons = $('<button>');
            $buttons.addClass('testAnswers');
            $buttons.text(questions[index].choice[i]);
            $('.answers').append($buttons);
      }
}

function showScore() {
      $('.timer').append();
      const $results = $('<p>Good Job!!!</p>');
      let finalScore = 'You got ' + right + ' right out of 6!'
      const $score = $('<form>');
      $('.header').append($results);
      $('#instructions').append(finalScore);
      return;
}

$(document).on('click', function() {
      createQuestion();
      createAnswers();
      var userAnswer = event.target.textContent
      var rightAnswer = questions[index].answers
      console.log(userAnswer);
      console.log(rightAnswer);
      if (userAnswer === rightAnswer) {
            right++;
            console.log(right);
            alert('Coggratulations you got ' + right + ' right');
      } else {
            wrong++;
            // console.log(wrong);
      } index++;
      console.log(index);
      if (index === 6) {
            showScore();
      }

})


// });