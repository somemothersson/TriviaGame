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
            correct: true
        }, {
            text: "answer2",
            correct: false
        },{
            text: "answer3",
            correct: false
        },{
            text: "answer4",
            correct: false
        }],
        gif: "",
    },
    qTwo: { 
        question: "This is question 2",
        answers: [{
            text: "answer1",
            correct: true
        }, {
            text: "answer2",
            correct: false
        }, {
            text: "answer3",
            correct: false
        }, {
            text: "answer4",
            correct: false
        }],
        gif: "",
    },
    qThree: { 
        question: "What is this",
        answers: [{
            text: "answer1",
            correct: true
        }, {
            text: "answer2",
            correct: false
        }, {
            text: "answer3",
            correct: false
        }, {
            text: "answer4",
            correct: false
        }],
        gif: "",
    },
    qFour: { 
        question: "What is this",
        answers: [{
            text: "answer1",
            correct: true
        }, {
            text: "answer2",
            correct: false
        }, {
            text: "answer3",
            correct: false
        }, {
            text: "answer4",
            correct: false
        }],
        gif: "",
    },
};
let question = "";
let choices = $("<choices>")
let test = ["answer1", "answer2", "answer3","answer4"]

let result = "";
let gif = "";
let wins = 0;
let loses = 0;
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
function questionOne() {
    //create buttons
    $(".content").empty();
    for (let i = 0; i < trivia.qOne.answers.length; i++){
    // console.log(test[i])
    let button = $('<button>').text(trivia.qOne.answers[i].text);
    button.val(trivia.qOne.answers[i].correct);
    $(".content").append(button);
    $("button").on("click", function(event) {
        if ($(this).val = true){
            console.log("is true")
        }

    });   
    
    
}

}
function startPage(){
    let startButton = $('<button>').text(trivia.states.start);
    $(".content").append(startButton);
    $("button").on("click", function(event) {
        
        
        questionOne();
    
    
    });  

}
// var row = $("<tr>");

// var title = $("<td>").text(response.Title)
// var year = $("<td>").text(response.Year)
// var actors = $("<td>").text(response.Actors)
// content.append(row);
// row.append(title, year, actors)
        
    //click start button to begin the game - only to begin



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