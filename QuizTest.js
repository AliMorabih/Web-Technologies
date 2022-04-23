(function(){
  function generateQuiz(){
    // Declaration of variable allow us to store the HTML output
    const output = [];
    questionQ.forEach(
      (currentQuestion, questionNumber) => {
        // Array will be storing the list of possible answers
        const answers = [];
        // Loop for each  answer
        for(letter in currentQuestion.answers){
          // Seting up an html radio button to allow the player to make a selection 
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

  function displayD(){

    // gather answer containers from our quiz
    const storeAnswers = quizContainer.querySelectorAll('.answers');
	
	// Declaration of variable point for each correct answer
	let po = 10;
	
    // keep tracking the correct answers
    let correctN = 0;

    // for each question
    questionQ.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
      const storeAnswer = storeAnswers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const playerSelection = (storeAnswer.querySelector(selector) || {}).value;

      // if answer is correct
      if(playerSelection === currentQuestion.answerRight){
        // adding the numbers of all correct answers
        correctN++;
		
      // We will color the correct answers with yellow
        storeAnswers[questionNumber].style.color = 'yellow';
      }
      // if answer is wrong or blank
      else{
      // We will color the wrong answers with red
        storeAnswers[questionNumber].style.color = 'red';
      }
    });
		numCo = correctN * po;
		
	if (numCo < 99){
	    //console.log('failed the test, Your Total Score is '+numCo);

	}else{
	    //console.log('Congratulation !!! , Your Total Score is '+numCo);
		window.location = 'CongratulationPage.html'; 
		//window.alert(" Your score  is " +numCo)
	}
	resultsContainer.innerHTML = "Your have failed the Quiz &#128542 Your Score is : " +numCo+ " % ";
	}
	const quizContainer = document.getElementById('quiz');
	const resultsContainer = document.getElementById('results');
	const submitAnswerPlayer = document.getElementById('submit');
	
	const questionQ = [
	{
      question: "What year were soccer rules codified ?",
      answers: {
        a: " 1862 ",
		b: " 1863 ",
        c: " 1864 "
        },
      answerRight: "b"
    },
    {	
      question: " How many panels are there on a traditional soccer ball ? ",
      answers: {
        a: " 32 panels ",
        b: " 33 panels",
        c: " 34 panels"
      },
      answerRight: "a"
    },
    {
      question: " Who was the first English player to win league titles in four countries ?",
      answers: {
        a: " Frand Lampard",
        b: " Steven Gerrard",
        c: " Rahim sterling",
        d: " David Beckham"
      },
      answerRight: "d"
    },
	{
      question: " What other team competes against Real Madrid in “The Classic” ?",
      answers: {
        a: "Barcalona",
        b: "Getafe",
        c: "Atletico Madrid",
        d: "VillaReal"
      },
      answerRight: "a"
    },
	{
      question: " What other team competes against Real Madrid in “The Classic” ?",
      answers: {
        a: "Barcalona",
        b: "Getafe",
        c: "Atletico Madrid",
        d: "VillaReal"
      },
      answerRight: "a"
    },
	{
      question: " What other team competes against Real Madrid in “The Classic” ?",
      answers: {
        a: "Barcalona",
        b: "Getafe",
        c: "Atletico Madrid",
        d: "VillaReal"
      },
      answerRight: "a"
    },
	{
      question: " What other team competes against Real Madrid in “The Classic” ?",
      answers: {
        a: "Barcalona",
        b: "Getafe",
        c: "Atletico Madrid",
        d: "VillaReal"
      },
      answerRight: "a"
    },
	{
      question: " What other team competes against Real Madrid in “The Classic” ?",
      answers: {
        a: "Barcalona",
        b: "Getafe",
        c: "Atletico Madrid",
        d: "VillaReal"
      },
      answerRight: "a"
    },
	{
      question: " What other team competes against Real Madrid in “The Classic” ?",
      answers: {
        a: "Barcalona",
        b: "Getafe",
        c: "Atletico Madrid",
        d: "VillaReal"
      },
      answerRight: "a"
    },
	{
      question: " What other team competes against Real Madrid in “The Classic” ?",
      answers: {
        a: "Barcalona",
        b: "Getafe",
        c: "Atletico Madrid",
        d: "VillaReal"
      },
      answerRight: "a"
    },
  ];

  // Starting up the Soccer quiz Test
  generateQuiz();

  //  listeners Event
  submitAnswerPlayer.addEventListener('click', displayD);
})();