const $instructions = document.querySelector('#instructions');
const $questions = document.createElement('<div>');

var questions = [
      {
            question: 'What is the color of the sky?', 
            answers: 'the sky is blue',
            choice: ['the sky is red', 'the sky is blue', 'the sky is green', 'the sky is brown']
      },
      {
            question: 'What is the color of the sky?', 
            answers: 'the sky is blue',
            choice: ['the sky is red', 'the sky is blue', 'the sky is green', 'the sky is brown']
      },
      {
            question: 'What is the color of the sky?', 
            answers: 'the sky is blue',
            choice: ['the sky is red', 'the sky is blue', 'the sky is green', 'the sky is brown']
      },
      {
            question: 'What is the color of the sky?', 
            answers: 'the sky is blue',
            choice: ['the sky is red', 'the sky is blue', 'the sky is green', 'the sky is brown']
      },
      {
            question: 'What is the color of the sky?', 
            answers: 'the sky is blue',
            choice: ['the sky is red', 'the sky is blue', 'the sky is green', 'the sky is brown']
      },
      {
            question: 'What is the color of the sky?', 
            answers: 'the sky is blue',
            choice: ['the sky is red', 'the sky is blue', 'the sky is green', 'the sky is brown']
      },

]

var right = 0;
var wrong = 0;

for (var i = 0; i < questions.length; i++) {
      document.createElement('<div>').textContent = questions[i].question;
}


console.log(questions[0].question);