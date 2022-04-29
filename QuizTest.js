(function(){
  function generateQuiz(){
    // Declaration of a variable allows us to store the HTML output
    const output = [];
    questionQ.forEach(
    (questionC, questionNumber) => {
		// Array will stock the list of possible responses
        const answers = [];
        // Loop for each  responses
        for(letter in questionC.answers){
		// Configure an html radio button to enable the player to select.
			answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${questionC.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${questionC.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
	}
	function displayD(){
    const storeAnswers = quizContainer.querySelectorAll('.answers');
	let po = 10;
    let correctN = 0;

    questionQ.forEach( (questionC, questionNumber) => {
	//locate the selected answer
    const storeAnswer = storeAnswers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const playerSelection = (storeAnswer.querySelector(selector) || {}).value;

	// if answered correctly
    if(playerSelection === questionC.answerRight){
     correctN++;
	storeAnswers[questionNumber].style.color = 'yellow';
    }
	// if the response is not correct or empty.
    else{
    // We will color the wrong answers with red
    storeAnswers[questionNumber].style.color = 'red';
    }
    });
	numCo = correctN * po;
	 	if (numCo < 80) {
		  	resultsContainer.innerHTML = " You did not pass the Quiz &#128542 Your Score is : " +numCo+ " % ";
		} else if (numCo < 99) {
			resultsContainer.innerHTML = "You pass the quiz and earn a grade of &#127941 your score is : " +numCo+ " % ";
		} else {
			window.location = 'CongratulationPage.html'; 
		}
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
      question: " How many panels are there on a soccer ball ? ",
      answers: {
        a: " 32 panels ",
        b: " 33 panels",
        c: " 34 panels"
      },
      answerRight: "a"
    },
    {
      question: " Who was the first English player who win the league titles in four countries ?",
      answers: {
        a: " Frand Lampard",
        b: " David Beckham",
        c: " Rahim sterling"
      },
      answerRight: "b"
    },
	{
      question: " what is the name of liverpool fans  ?",
      answers: {
        a: "Kopites",
        b: "Culés",
        c: "Vikingos"       
      },
      answerRight: "a"
    },
	{
      question: " What other team competes against Real Madrid in “The Classic” ?",
      answers: {
        a: "Barcelona",
        b: "Getafe",
        c: "Atletico Madrid",
        d: "VillaReal"
      },
      answerRight: "a"
    },
	{
      question: " which country will host fifa world cup 2022 ?",
      answers: {
        a: "Canada",
        b: "Qatar",
        c: "USA",
        d: "England"
      },
      answerRight: "b"
    },
	{
      question: " which team has the highest champions league trophy  ?",
      answers: {
        a: "Barcalona",
        b: "Ac Milan",
        c: "Real Madrid",
        d: "Liverpool"
      },
      answerRight: "c"
    },
	{
      question: " Who wins the Champions League 2021  ?",
      answers: {
        a: "Barcalona",
        b: "Real Madrid",
        c: "PSG",
        d: "Chelsea F.C"
      },
      answerRight: "d"
    },
	{
      question: " how many trophy has pep guardiola won as manager ?",
      answers: {
        a: "29 major trophies ",
        b: "28 major trophies ",
        c: "26 major trophies ",
        d: "24 major trophies "
      },
      answerRight: "a"
    },
	{
      question: "  How old was the youngest professional soccer player ?",
      answers: {
        a: "16",
        b: "14",
        c: "13",
        d: "12"
      },
      answerRight: "d"
    },
  ];
  // Soccer test begins.
  generateQuiz();
  //  listeners Event
  submitAnswerPlayer.addEventListener('click', displayD);
})();