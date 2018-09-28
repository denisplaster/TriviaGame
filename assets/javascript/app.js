$(document).ready(function() {


	//autoplay background music in chrome
	var isChrome = /Chrome/.test(navigator.playerAgent) && /Google Inc/.test(navigator.vendor);
isChrome.volume = 0.1;
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }
    

  
//Setup variables to keep track of wins, time, and question number

  var questionTracker = 0;
  var time = 15;
  var correctGuesses = 0;
  var questions = [
    //list of questions and answers and images
    {
      question:"In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
      choices:["A: Ping! Ping!", "B: Meep! Meep!", "C: Aooga! Aooga!", "D: Vroom! Vroom!"],
      correctAnswer:"B: Meep! Meep!",
      image:"<img src='https://media.giphy.com/media/xThtaaVNrPdQ64U9vq/giphy.gif' class='cashMoney'>"
    },

    
    {
      question:"Where should choking victims place their hands to indicate to others that they need help?",
      choices:["A: Over the eyes", "B: Around the throat", "C: On the knees", "D: On the hips"],
      correctAnswer:"B: Around the throat",
      image:"<img src='https://media.giphy.com/media/xUPGcft4fv10CTezE4/giphy.gif' class='cashMoney'>"
    }, 
  
    {
      question:"Which of these dance names are used to describe a fashionable dot?",
      choices:["A: Polka", "B: Hora", "C: Swing", "D: Lambada"],
      correctAnswer:"A: Polka",
      image:"<img src='https://media.giphy.com/media/BdAXV1wou0q0U/giphy.gif' class='cashMoney'>"
    },
     
    {
      question:"In what 'language' would you say 'ello-hay' to greet your friends",
      choices:["A: Bull Latin", "B: Dog Latin", "C: Duck Latin", "D: Pig Latin"],
      correctAnswer:"D: Pig Latin",
      image:"<img src='https://media.giphy.com/media/3o7TKxefGBsmSO8aly/giphy.gif' class='cashMoney'>"
    },
      
    {
      question:"What part of the chicken is commonly called the 'drumstick'?",
      choices:["A: Breast", "B: Wing", "C: Gizzard", "D: Leg"],
      correctAnswer:"D: Leg",
      image:"<img src='https://media.giphy.com/media/3o7qE3x7MVn7jWznpK/giphy.gif' class='cashMoney'>"
    },
    
    {
      question:"What is the only position on the football team that can be 'sacked'?",
      choices:["A: Center", "B: Wide receiver", "C: Tight end", "D: Quarterback"],
      correctAnswer:"D: Quarterback",
      image:"<img src='https://media.giphy.com/media/4ce1iOCQacF8I/giphy.gif' class='cashMoney'>"
    },
    
    {
      question:"What god of love is often depicted as a chubby winged infant with a bow and arrow?",
      choices:["A: Zeus", "B: Mercury", "C: Cupid", "D: Poseidon"],
      correctAnswer:"C: Cupid",
      image:"<img src='https://media.giphy.com/media/26BRuSU7iQm1nXnI4/giphy.gif' class='cashMoney'>"
    },
     
    {
      question:"What Stevan Spielberg film climaxes at a place called Devil's Tower?",
      choices:["A: E.T.", "B: Jurassic Park", "C: Raiders of the Lost Ark", "D: Close encounter of the Third Kind"],
      correctAnswer:"D: Close encounter of the Third Kind",
      image:"<img src='https://media.giphy.com/media/105gvruzgXDeDu/giphy.gif' class='cashMoney'>"
    },
     
    {
      question:"In what U.S. town did the famous 1881 shoot-out at the O.K. Corral take place?",
      choices:["A: Laramie", "B: Tombstone", "C: El Paso", "D: Dodge City"],
      correctAnswer:"B: Tombstone",
      image:"<img src='https://media.giphy.com/media/qciLy2kpfQgLK/giphy.gif' class='cashMoney'>"
    },
     
    {
      question:"Which of the following months has no U.S. federal holiday?",
      choices:["A: August", "B: February", "C: September", "D: November"],
      correctAnswer:"A: August",
      image:"<img src='https://media.giphy.com/media/xUPGcdgnOseE6Payqc/giphy.gif' class='cashMoney'>"
    },
     
    {
      question:"What mythological beast is reborn from its own ashes",
      choices:["A: Phoenix", "B: Minotaur", "C: Dragon", "D: Golem"],
      correctAnswer:"A: Phoenix",
      image:"<img src='https://media.giphy.com/media/aU1R8mR8bf1za/giphy.gif' class='cashMoney'>"
    },
    
    {
      question:"Who developed the first effective vaccine against polio?",
      choices:["A: Albert Sabin", "B: Niels Bohr", "C: Louis Pasteur", "D: Jonas Salk"],
      correctAnswer:"D: Jonas Salk",
      image:"<img src='https://media.giphy.com/media/l2JegXxMqQv9FmgCc/giphy.gif' class='cashMoney'>"
    },
    
    {
      question:"Which of the following is not a monotheistic religion",
      choices:["A: Islam", "B: Judaism", "C: Hinduism", "D: Pastafarianism"],
      correctAnswer:"C: Hinduism",
      image:"<img src='https://media.giphy.com/media/RtPB9EkGDI00M/giphy.gif' class='cashMoney'>"
    },
    
    {
      question:"What architect designed the glass pyramid in the courtyard of the Louvre?",
      choices:["A: Philip Johnson", "B: Le Corbusier", "C: Frank Gehry", "D: I.M. Pei"],
      correctAnswer:"D: I.M. Pei",
      image:"<img src='https://media.giphy.com/media/BNtyNS38pflQY/giphy.gif' class='cashMoney'>"
    },
    
    {
      question:"Which of these U.S. Presidents appeared on the television series 'Laugh-In'?",
      choices:["A: Lyndon Johnson", "B: Richard Nixon", "C: Jimmy Carter", "D: Gerald"],
      correctAnswer:"B: Richard Nixon",
      image:"<img src='https://media.giphy.com/media/GOsq7QnYlahag/giphy.gif' class='cashMoney'>"
    }];
   
//display each question with the choices for that question
	function optionsList() {
		let question = '<p>' + questions[questionTracker].question + '</p>';
		for (let choice of questions[questionTracker].choices) {
			question += '<p class="choices">' + choice + '</p>';
		}
		$("#gameShow").append(question);
	}

//If player answers correctly, go to the next question. After all questions answered correctly, go to reward page.
	function playerWin() {
		$("#gameShow").html("<p>You got it right!</p>");
		correctGuesses++;
		$("#gameShow").append(questions[questionTracker].image);
		setTimeout(nextQuestion, 3000);
		questionTracker++;
	}

	//If player gets a question wrong, the game is over and switches to reward page
	function playerLoss() {
		var correctAnswer = questions[questionTracker].correctAnswer;
		$("#gameShow").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>");
			howdYouDo();
	}

	//add a timer function to each question and have it reset for correct answers
	function playerTimeout() {
		if (time === 0) {
			$("#gameShow").html("<p>You ran out of time!</p>");
			playerLoss();
			gameReset();

			var correctAnswer = questions[questionTracker].correctAnswer;
			$("#gameShow").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionTracker].image);
			
		}
	}

	//Show how many questions the player got right
	function howdYouDo() {
		if (correctGuesses === questions.length) {
			var endMessage = "You've won a $1,000,000!";	
		}
		else if (correctGuesses === 14) {
			var endMessage = "You've won $500,000!";
		}
		else if (correctGuesses === 13) {
			var endMessage = "You've won $250,000!";
		}
		else if (correctGuesses === 12) {
			var endMessage = "You've won $125,000!";
		}
		else if (correctGuesses === 11) {
			var endMessage = "You've won $64,000!";
		}
		else if (correctGuesses === 10) {
			var endMessage = "You've won $32,000!";
		}
		else if (correctGuesses === 9) {
			var endMessage = "You've won $16,000!";
		}
		else if (correctGuesses === 8) {
			var endMessage = "You've won $8,000!";
		}
		else if (correctGuesses === 7) {
			var endMessage = "You've won $4,000!";
		}
		else if (correctGuesses === 6) {
			var endMessage = "You've won $2,000!";
		}
		else if (correctGuesses === 5) {
			var endMessage = "You've won $1,000!";
		}
		else if (correctGuesses === 4) {
			var endMessage = "You've won $500!";
		}
		else if (correctGuesses === 3) {
			var endMessage = "You've won $300!";
		}
		else if (correctGuesses === 2) {
			var endMessage = "You've won $200!";
		}
		else if (correctGuesses === 1) {
			var endMessage = "You've won $100!";
		}
		else {
			var endMessage = "We have some lovely door prizes for you...";
			
		}
		//allow option of replaying the game
		$("#gameShow").html("<p>" + endMessage + "</p>" + "<p>You got " + 
			correctGuesses + " right.</p>");
		$("#gameShow").append("<h1 id='start'>Start Over?</h1>");
		gameReset();
		$("#start").click(nextQuestion);
	}

	//create a countdown timer
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				playerTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html(time);
		}
	}

	//after each question is answered, move on to next question or results page
	function nextQuestion() {
		if (questionTracker < questions.length) {
			time = 15;
			$("#gameShow").html("<span id='timer'>" + time + "</span>");
			optionsList();
			timer();
			playerTimeout();
		}
		else {
			howdYouDo();
			gameReset();
		}

	}

	//check if players guesses are correct 
	$("#gameShow").on("click", ".choices", (function() {
		var playerGuess = $(this).text();
		if (playerGuess === questions[questionTracker].correctAnswer) {
			clearInterval(clock);
			playerWin();
		}
		else {
			clearInterval(clock);
			playerLoss();
		}
	}));
//reset all variables to 0
	function gameReset() {
		questionTracker = 0;
		correctGuesses = 0;
	}

//start button
    $("#start").click(nextQuestion);

	
});










  