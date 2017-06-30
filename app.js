
var state = {
			
              questions: [
                            { text: "What's the capital of England?" , 
			   				 choices: ["Manchester", "London", "Birmingham", "Kent"],
			   				 answer: 1},
			   			  
			   			   { text: "What is the capital of Afghanistan",
			   				 choices: ["Kandahar", "Mosul", "Kabul", "Peshawar"],
			   				 answer: 2},

                            { text: "What is the capital of Chile?",
			   				 choices: ["Buenos Aires", "Rio de Janeiro", "Puento Alto", "Santiago"],
			   				 answer: 3},
                
                            { text: "What's the capital of Georgia?" , 
			   				 choices: ["Tbilisi", "Prague", "Atlanta", "Athens"],
			   				 answer: 0},
			   				 
                            { text: "What is the capital of India?",
                              choices: [ "Rajasthan", "Calcutta","Gurgaon", "New Delhi"],
                              answer: 3},
                 
							
							{ text: "What is the capital of Ethiopia?",
			   				 choices: ["Addis Ababa", "Kampala", "Addis Zemen"],
			   				 answer: 0},
                
                            { text: "What is the capital of Indonesia?",
			   				 choices: ["Bali", "Jakarta", "Manila","Bakasi", "Penang"],
			   				 answer: 1},
                
                             { text: "What is the capital of Iraq?",
			   				 choices: ["Baghdad", "Tehran", "Mosul","Basra","Dahuk"],
			   				 answer: 0},
                            
                            { text: "What is the capital of Mexico?",
			   				 choices: ["Cancun", "Acapulco", "Tijuana", "Mexico City","Puebla"],
			   				 answer: 3},
                            
							
							{ text: "What is the capital of New Zealand?",
			   				 choices: ["Perth", "Brisbane","Melbourne","Wellington"],
			   				 answer: 3},
			   				 ],

			   	currentQuestion: 0,

			   	currentScore: 0,
                view: "startPage",



}

//Modify functions 



var currentQuestionText = state.questions[state.currentQuestion].text

function answerQuestion(event, chosenButton){

	var correctAnswer = state.questions[state.currentQuestion].choices[state.questions[state.currentQuestion].answer]
	var currentScoreIndex = state.currentScore
	var currentQuestionText = state.questions[state.currentQuestion].text

//change to compare the numeric values of the chosenButton value
    if (state.questions[state.currentQuestion].choices[chosenButton] === correctAnswer) {
    //if correct, add 1 to score
     state.currentScore++
    } 
    	state.view = "feedbackPage";
    	showFeedback()
}
//need checkState function

function startGame(){
    state.view = "questionsPage";
    showView();
    showQuestion()
}

function resetGame(){
    state.view = "startPage";
    state.currentScore = 0
	state.currentQuestion = 0
	showView();
}

function nextQuestion() {
    state.currentQuestion++
    if (state.currentQuestion < state.questions.length) {
    	state.view = "questionsPage";
    	showQuestion();
    }
    else {
    	state.view = "finalPage";
    	showResults();
    }


}

function showFeedback (){
	showView();
    var score = state.currentScore
    $( ".feedbackPage h2").html(`You have ${score} correct` );
}


function showResults() {
	showView();
	var score = state.currentScore
	var finalScore = ""
	if (state.currentScore === 10){
// 
         $( ".finalPage h3").html(`WOW! Grade: A+! Well done!! You got everything right!! You're definitely a global citizen!`)
	} 
  
  if (state.currentScore === 7, 8, 9){
// 
         $( ".finalPage h3").html(`Good job! You definitely are pretty worldly!`)
	} 
  if (state.currentScore === 4,5,6){
// 
         $( ".finalPage h3").html(`Hmm, you're on the edge. Might be a good idea to refresh your geography!`)
	} 
  
  if (state.currentScore == 0, 1, 2, 3) {
      $( ".finalPage h3").html(`Oh dear. Better hit the books! But as the brilliant Aaliyah once said... "if at first you don't succeed, dust yourself off and try again! Click the button below to do so!`)
  }
    $( ".finalPage h2").html(`You got ${score} correct out of 10. Want to play again?`);
}
function showView(){
	$('.startPage').hide()
    $('.questionsPage').hide()
    $('.feedbackPage').hide()
    $('.finalPage').hide()

	$(`.${state.view}`).show();
} 
//Render functions 

function showQuestion(){
    var curQues = state.currentQuestion
    const ques = state.questions[curQues]
    showView();

    $("#questionAsk").text(ques.text);
    $(".answerButtons .btn1").text(ques.choices[0]);
    $(".answerButtons .btn2").text(ques.choices[1]);
    $(".answerButtons .btn3").text(ques.choices[2]);
    $(".answerButtons .btn4").text(ques.choices[3]);
   
}

//Event listeners

$(document).ready(function() {

	$('.start').on('click', '', function(event){
	   
	    startGame()

  	});

	$('.btn').on('click', '', function(event){
	    event.preventDefault(); //form submit problem -- dont actually need 
	    var chosenButton = $(this).val()
	    answerQuestion(event, chosenButton)   

    });
	$("#questionAsk").submit('', function(event) {
		event.preventDefault();
	    state.view = "questionsPage"; //try to move back to "state" manipulation (section 2)
		showQuestion();
	}) 

	$('.nextButton').on('click', function(event) {
		event.preventDefault();
		nextQuestion()
	})

	$('.resetButton').on('click', function(event) {
		event.preventDefault();
		resetGame()
	})
})

