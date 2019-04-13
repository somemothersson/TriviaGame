//declare variables
let timer = 0;
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
            text: "answer1",
            correct: "yes",
        }, {
            text: "answer2",
            correct: "not",
        },{
            text: "answer3",
            correct: "not",
        },{
            text: "answer4",
            correct: "not",
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
        question: "What is this",
        answers: [{
            text: "answer1",
            correct: "yes",
        }, {
            text: "answer2",
            correct: "no",
        }, {
            text: "answer3",
            correct: "no",
        }, {
            text: "answer4",
            correct: "no",
        }],
        gif: "",
    },
    qFour: { 
        question: "What is this",
        answers: [{
            text: "answer1",
            correct: "no",
        }, {
            text: "answer2",
            correct: "no",
        }, {
            text: "answer3",
            correct: "yes",
        }, {
            text: "answer4",
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
let intro = "Start"

// The Source Family
// The Peoples Temple
// Heavens Gate
// Rajneeshpuram

//branch dividians
//The Eckankar
//Scientology
//Family International
//Document ready

$( document ).ready(function() {
// let btn01 = trivia.states.start;
// var content = $(".content")

//function click to start game
//reset function is the start button
//function to load question set
startPage();
// $("#button").on("click", function){
//     questionOne()

// });
// content.append(btn1);
function correct(){
    


}
// trivia.qOne.question
// trivia.qOne.answers
// questionTwo
//questionPop(trivia.qTwo.question, trivia.qTwo.answers, questionThree)
//questionPop(trivia.qThree.question, trivia.qThree.answers, questionFour)
//questionPop(trivia.qFour.question, trivia.qFour.answers, endPage)
function questionPop(question, answer, quest) {
    
    
    $(".content").empty();
    //add question
    
    $(".content").append(question);
    //buttons - loop array to grab questions and creat 4 buttons
    for (let i = 0; i < answer.length; i++){
     //create buttons   
    let button = $('<button>').text(answer[i].text);
    button.addClass(answer[i].correct);
    $(".content").append(button);   
}
//if yes
$(".yes").on("click", function(event) {
    wins++
    console.log("wins: ",wins)
  
    nextStep(quest)
});  
$(".not").on("click", function(event) {
    losses++
        console.log("losses: ",losses)
    
    //show gif
     nextStep(quest)
});  

}
function nextStep () {
    questionPop(trivia.qTwo.question, trivia.qTwo.answers, questionThree)
}


function correct () {


}
function incorrect () {

    
}


function startPage(){
    let startButton = $('<button>').text(trivia.states.start);
    $(".content").append(startButton);
    $("button").on("click", function(event) {
        
        
    questionPop(trivia.qOne.question, trivia.qOne.answers, questionTwo)
    
    
    });  

}

function endPage(){
    let startButton = $('<button>').text(trivia.states.start);
    $(".content").append(startButton);
    $("button").on("click", function(event) {
        
        
    
    
    
    });  

}




//function question load
        //timer will be displayed
        //timer will start counting down from 25
    //the question will be displayed 
    //4 answer buttons will be displayed
    //If the correct answer is clicked 
        //display if the choice was correct or incorrect for 5 seconds
        //timer will stop
        //1 point will be added to total hidden score, displayed only at the end
        //related gif will display to the question/answer
        //go to the next question automatically after 3-5 seconds
    //else the incorrect answer is chosen or no answer is chosen
        //timer will stop
        //1 point will be subtracted from total hidden score, displayed only at the end
        //display of the correct for 5 seconds
            //related gif will display to the question/answer
        //go to the next question automatically after 3-5 seconds
//function question load(one)
//function question load(two)
//function question load(three)
//function question load(four)
//function question complete

//after 5 questions the game will end and show score.
});