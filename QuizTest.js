(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
	
	// Declaration of variable point by each question
	let point = 25;
	
    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
		
        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

		numCo = numCorrect * point;
    
		// Display the number of the correct answers 
        resultsContainer.innerHTML = `Your correct answers is  ${numCorrect}  out  of  ${myQuestions.length} wrong answers`;
		
	if (numCo < 50)
	    //console.log('failed the test, Your Total Score is '+numCo);
		 window.alert("You failed the test yr score  " +numCo)
	else
		 window.alert("Congratulation you succeed the test the test yr score  " +numCo)
	    //console.log('Congratulation !!! , Your Total Score is '+numCo);
			

  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What year were soccer rules codified ?",
      answers: {
        a: " 1862 ",
		b: " 1863 ",
        c: " 1864 "
        },
      correctAnswer: "b"
    },
    {
      question: " How many panels are there on a traditional soccer ball ? ",
      answers: {
        a: " 32 panels ",
        b: " 33 panels",
        c: " 34 panels"
      },
      correctAnswer: "a"
    },
    {
      question: " Who was the first English player to win league titles in four countries ?",
      answers: {
        a: " Frand Lampard",
        b: " Steven Gerrard",
        c: " Rahim sterling",
        d: " David Beckham"
      },
      correctAnswer: "d"
    },
	{
      question: " What other team competes against Real Madrid in “The Classic” ?",
      answers: {
        a: "Barcalona",
        b: "Getafe",
        c: "Atletico Madrid",
        d: "VillaReal"
      },
      correctAnswer: "a"
    },
	
  ];

  // Starting the Quiz
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();