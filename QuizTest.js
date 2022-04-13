(function(){
  function buildQuiz(){
    // Declaration of variable allow us to store the HTML output
    const output = [];

    // for each questions
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        // Array will be storing the list of possible answers
        const answers = [];
        // Loop for each  answer
        for(letter in currentQuestion.answers){
          // Seting up an html radio button to allow the player to make a selection selection
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        // Adding  question & its answers to the output
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
	let point = 10;
	
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
        // adding the numbers of all correct answers
        numCorrect++;
		
      // We will color the correct answers with yellow
        answerContainers[questionNumber].style.color = 'yellow';
      }
      // if answer is wrong or blank
      else{
      // We will color the wrong answers with red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
		numCo = numCorrect * point;
		
	if (numCo < 99){
	    //console.log('failed the test, Your Total Score is '+numCo);
		 window.alert("Please try again, You failed the test your score is  " +numCo)
	}else{
	    //console.log('Congratulation !!! , Your Total Score is '+numCo);
		window.location = 'file:///C:QuizProject/CongratulationPage.html'; 
		window.alert(" Your score  is " +numCo)

	}
	resultsContainer.innerHTML = `Your correct answers is  ${numCorrect}  out  of  ${myQuestions.length} wrong answers` ;
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

  // Starting up the Soccer quiz Test
  buildQuiz();

  //  listeners Event
  submitButton.addEventListener('click', showResults);
})();