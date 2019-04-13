//declare variables
let timer = 25;
let trivia = {
    states: {
        right: "You are Correct!",
        wrong: "You are Incorrect!",
        timeout: "You are out of time!",
        start: "Click here to get started"
    },
    qOne: { 
        question: "This is question 1",
        answers : [{
            text: "q1answer1",
            correct: "yes",
        }, {
            text: "q1answer2",
            correct: "no",
        },{
            text: "q1answer3",
            correct: "no",
        },{
            text: "q1answer4",
            correct: "no",
        }],
        gif: "",
    },
    qTwo: { 
        question: "This is question 2",
        answers: [{
            text: "q2answer1",
            correct: "no",
        }, {
            text: "q2answer2",
            correct: "yes",
        }, {
            text: "q2answer3",
            correct: "no",
        }, {
            text: "q2answer4",
            correct: "no",
        }],
        gif: "",
    },
    qThree: { 
        question: "Question 3 What is this",
        answers: [{
            text: "q3answer1",
            correct: "yes",
        }, {
            text: "q3answer2",
            correct: "no",
        }, {
            text: "q3answer3",
            correct: "no",
        }, {
            text: "q3answer4",
            correct: "no",
        }],
        gif: "",
    },
    qFour: { 
        question: "Question 4 What is this",
        answers: [{
            text: "q4answer1",
            correct: "no",
        }, {
            text: "q4answer2",
            correct: "no",
        }, {
            text: "q4answer3",
            correct: "yes",
        }, {
            text: "q4answer4",
            correct: "no",
        }],
        gif: "",
    },
};
let question = "";
let choices = $("<choices>")
let result = "";
let wins = 0;
let losses = 0;
let comp = 0;
let intro = "Start"
const content = $(".content");

// The Source Family
// The Peoples Temple
// Heavens Gate
// Rajneeshpuram

//branch dividians
//The Eckankar
//Scientology
//Family International

var counter = 25;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    // let timer = $<span id="timer">
    // <span id="time">10</span>
    // if (counter <= 0) {
    //  		clearInterval(interval);
    //   	$('#timer').html("<h3>Count down complete</h3>");  
    //     return;
    // }else{
        $("<div>").html("<span>")
    	$('#time').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1000);

$( document ).ready(function() {

startPage();



function questionPop(question, answer, ) {
    const content = $(".content"); 
    $(".content").empty();
    count()
       //timer will be displayed
        //timer will start counting down from 25
    setInterval()
   
    //the question will be displayed 
    // content.append(timer)
    $(".content").append(question);

    //buttons - loop array to grab questions and creat 4 buttons
    for (let i = 0; i < answer.length; i++){
     //create 4 buttons, adding class to store the correct answer
    let button = $('<button>').text(answer[i].text);
    button.addClass(answer[i].correct);
    $(".content").append(button);   
}

    $("button").on("click", function() {
    var answer= $(this).attr("class");
    
    if(answer == "yes"){
    wins++  
    } else if ( answer == "no"){
        losses++ 
    }
    comp++
    nextStep()
    //related gif will display to the question/answer
        //go to the next question automatically after 3-5 seconds

});  

 }
    //This fuction along with the comp variable is setup for flow control to allow the questionPop to present data for each question.
function nextStep () {
    if (comp == 1){
        //question load(two)
    questionPop(trivia.qTwo.question, trivia.qTwo.answers)
    } else if (comp == 2){
        //question load(three)
    questionPop(trivia.qThree.question, trivia.qThree.answers)
    } else if (comp == 3){
        //question load(four)
    questionPop(trivia.qFour.question, trivia.qFour.answers)
    } else if (comp == 4){
        //after 4 questions the game will end and show score.
        endPage();
    }    
}


function startPage(){
    let startButton = $('<button>').text(trivia.states.start);
    $(".content").append(startButton);
    $("button").on("click", function(event) {
        
        
    questionPop(trivia.qOne.question, trivia.qOne.answers);
    
    
    });  

}

function endPage(){
    $(".content").empty();
    let state = "YOU ARE OVER!"
    $(".content").text(state);
    

}
function timeUp() {
    $("#time-left").append($("<h4>").text("times up!"))
}    
function holdingPage (gif, ){

}
function count() {

    //  TODO: increment time by 1, remember we cant use "this" here.
    timer--;
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    var timeString = timer;
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $(".content").text(timeString);

  }



//function question load
     
    
  
    //If the correct answer is clicked 
        //display if the choice was correct or incorrect for 5 seconds
        //timer will stop
        //1 point will be added to total hidden score, displayed only at the end
        
    //else the incorrect answer is chosen or no answer is chosen
        //timer will stop
        //1 point will be subtracted from total hidden score, displayed only at the end
        //display of the correct for 5 seconds
            //related gif will display to the question/answer
        //go to the next question automatically after 3-5 seconds



});