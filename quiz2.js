// start quiz hides button, calls display question function, and calls starts timmer funtion
// funtion displayQuestion Displays the questions and choices

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
// const displayQ = displayQuestions();
// const displayA = disp

function startQuiz() {
      const testInstructions = alert('Please make sure to hit submit after each answer');
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

// $newQuestion.text = questions[currentQuestion].question;
// console.log(questions[currentQuestion].question);

function createQuestion(index) {
      $('.questionss').empty();
      const $testQuestion = $('<p>');
      $testQuestion.addClass('testQuestion');
      $testQuestion.text(questions[index].question);
      $('.questionss').append($testQuestion);
}

function createAnswers(index) {
      //empty previous buttons
      //make 4 answer buttons that each have
      //for loop
            //make button
            questions[index].choice[i]
            //append it
}

$(document).on('click', '.sub' , function() {
      $(this).val()
})

// function displayQuestions() {
//       $.each(questions[currentQuestion].question, function(index, value) {
            // const $testQuestion = $('<p>');
            // console.log($testQuestion);
            // $('.questionss').append($testQuestion);
            // $testQuestion.addClass('testQuestion');
            // $testQuestion.attr('data-letter', value);
            // $testQuestion.text(value);
            // console.log('value', value);
            
//       })
// }


// function displayAnswers() {
//       $.each(questions[currentQuestion].choice, function(index, value) {
//             const $answerButton = $('<button>');
//             $answerButton.addClass('');
//             $answerButton.attr('');
//             $answerButton.text(value);
//             console.log('value', value);
//             $('.answerss').append($answerButton);
//       })
// }



// // adding in the functions to display the test
// var display = $('#questionss')
// display.text(displayQ);
// console.log(displayQuestions());



// currentQuestion++;

      
      // // Function for rendering questions
      // for (var i = 0; i < questions.length; i++) {
      
      //       testQuestion = questions[i].question;
      //       console.log(testQuestion);
      //       $('#container').addClass('.css');
      //       $('#container').text(testQuestion);


      //       for (var i = 0; i < 4; i++) {
      //             var answer = $('<div>');
      //             answer.addClass('.answerss');
      //             $answers.append(answer);

      //       } return;

      //       // $questions.append('#container');
      //       // answers = [];  

      // }
      //       // on click listener
      
      // var submit = $('<button>').text('submit').addId
      // $instructions.append(submit)

// we want to target the questions object
// we want the question key to be read
// we want to create four choices with button attributes
// if the test taker gets it wrong/right an alert pops up telling them
// an alert tells them how many right/wrong they have
// At the end of the test they receive a final grade
// they can add their name and include it as a highscore