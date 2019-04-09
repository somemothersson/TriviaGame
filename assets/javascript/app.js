//declare variables
let timer = 0;
let logic = {
    endState: {
        right: "You are Correct!",
        wrong: "You are Incorrect!",
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
console.log(logic.qOne.question, logic.qOne.answers[2].text)
//click start button to begin the game - only to begin
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
//after 5 questions the game will end and show score.
