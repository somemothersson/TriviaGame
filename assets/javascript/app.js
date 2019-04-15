//declare variables
let timer = 25;
//This object stores much of the operation of the game
let trivia = {
    states: {
        right: "You are Correct!",
        wrong: "You are Incorrect!",
        timeout: "You are out of time!",
        start: "Click here to get started"
    },
    qOne: { 
        question: "What is the capital of Montana?",
        answers : [{
            text: "Helena",
            correct: "yes",
        }, {
            text: "Barstow",
            correct: "no",
        },{
            text: "Bozeman",
            correct: "no",
        },{
            text: "Oro y Plata",
            correct: "no",
        }],
        gif: "https://media.giphy.com/media/KPd2gRH4Q4Oqc/giphy.gif",
    },
    qTwo: { 
        question: "What is the Capital of Texas",
        answers: [{
            text: "Chainsaw Massacre",
            correct: "no",
        }, {
            text: "Luckenbach",
            correct: "yes",
        }, {
            text: "Austin",
            correct: "yes",
        }, {
            text: "Dallas",
            correct: "no",
        }],
        gif: "https://media.giphy.com/media/KPd2gRH4Q4Oqc/giphy.gif",
    },
    qThree: { 
        question: "What is the capital of California",
        answers: [{
            text: "San Diego",
            correct: "no",
        }, {
            text: "Sacramento",
            correct: "yes",
        }, {
            text: "Santa Clause",
            correct: "no",
        }, {
            text: "Hollywood",
            correct: "no",
        }],
        gif: "https://media.giphy.com/media/3EiNpweH34XGoQcq9Q/giphy.gif",
    },
    qFour: { 
        question: "What is the Capital of New Jersey",
        answers: [{
            text: "Ashbury Park",
            correct: "no",
        }, {
            text: "Trenton",
            correct: "yes",
        }, {
            text: "Atlantic City",
            correct: "yes",
        }, {
            text: "Jersey City",
            correct: "no",
        }],
        gif: "https://media.giphy.com/media/SXeezvYc8uRUc/giphy.gif",
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
let intervalId;
let number = 25;
let temp = false;





$( document ).ready(function() {

startPage();



function questionPop(question, answer, ) {
    const content = $(".content"); 
   
    
    reset()
       //timer will be displayed
        //timer will start counting down from 25
    // number = 25;
    run();
    setTimeout(twentyFiveSeconds,25000);
   
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
    temp = true;
   
    } else {
        losses++ 
        stop();
        holdingPage()
        temp = false;
    }
    comp++
    holdingPage()
    stop();
    console.log(comp)
    console.log(temp)
    //related gif will display to the question/answer
        //go to the next question automatically after 3-5 seconds

});  

 }
 function holdingPage (){
    $(".content").empty();

    
    
    if ( temp == false){
        $(".content").append(trivia.states.wrong)
    } else {
        $(".content").append(trivia.states.right)
    }    
    let img = $('<img>').attr("src", trivia.qTwo.gif);
    $(".content").append("<br>")
    $(".content").append(img)
    setTimeout(fiveSeconds,5000);
    
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
   







//   




function twentyFiveSeconds() {
    holdingPage()
  }


function fiveSeconds() {
    nextStep()
  }

function run(number) {
var intervalId;


    intervalId = setInterval(decrement, 1000);


}
function decrement() {

    number--;

    $(".timer").html("<h2>" + "You have " + number + " seconds remaining" + "</h2>");

    if (number === 0) {

    stop();
    }
    
}

function stop() {
    number = 25;
  clearInterval(intervalId);
}
function reset(){
$(".content").empty();
$(".timer").empty();
clearInterval(intervalId)
let number = 25;
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