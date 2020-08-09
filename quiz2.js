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
const displayQ = displayQuestions();
const displayA = disp

function startQuiz() {
      const testInstructions = alert('Please make sure to hit submit after each answer');
      const $instructions = $('#instructions');
      $instructions.text('Choose an answer:');
      const $test = $('#questionAnswers');

      // addind a timer
      const $timer = $('<div>');
      $timer.addClass('timer');
      $test.append($timer);


      // creating a new div for generated questions
      const $newQuestion = $('<div>');
      $newQuestion.addClass('questionss');
      $test.append($newQuestion);

      // creating a new div for generated answers
      const $newAnswers = $('<div>');
      $newAnswers.addClass('answerss');
      $test.append($newAnswers);

      // // adding the submit buttom
      const submit = $('<button>');
      submit.addClass('sub');
      submit.text('submit');
      $test.append(submit);

}


function displayAnswers() {
      $.each(questions[currentQuestion].choice, function(index, value) {
            const $answerButton = $('<button>');
            $answerButton.addClass('');
            $answerButton.attr('');
            $answerButton.text(value);
            console.log('value', value);
            $('.answerss').append($answerButton);
      })
}

function displayQuestions() {
      $(questions[currentQuestion].question, function(index, value) {
            const $testQuestion = $('<p>');
            $('.questionss').append($testQuestion);
            $testQuestion.addClass('testQuestion');
            // $testQuestion.attr('');
            $($testQuestion).text(value);
            console.log('value', value);
            
      })
}

displayQuestions();
displayAnswers();

// adding in the functions to display the test
var display = $('#questionss')
display.text(displayQ);
console.log(displayQuestions());



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