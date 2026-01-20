let questions = [
    {
        question: "1. What is JavaScript?",
        options: ["Programming Language", "Database", "Browser", "OS"],
        answer: 0
    },
    {
        question: "2. Which tag is used for JS?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: 2
    },
    {
        question: "3. Which symbol is used for comments?",
        options: ["//", "##", "<!-- -->", "**"],
        answer: 0
    },
    {
        question: "4. Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "variable"],
        answer: 1
    },
    {
        question: "5. Which function is used to print output in JavaScript?",
        options: ["console.log()", "print()", "output()", "display()"],
        answer: 0
    },
    {
        question: "6.JavaScript code is executed in the ______.",
        options: ["server", "compiler", "browser", "database"],
        answer: 3
    },
    {
        question: "7. Which operator is used for addition in JavaScript?",
        options: ["+", "-", "*", "/"],
        answer: 0
    },
    {
        question: "8. What is the correct way to create a function?",
        options: ["function myFunction()", "create myFunction()", "def myFunction()", "var myFunction = function()"],
        answer: 0
    },
    {
        question: "9. Which data type is NOT in JavaScript?",
        options: ["string", "boolean", "character", "number"],
        answer: 3
    },
    {
        question: "10. Which method is used to get an HTML element by ID?",
        options: ["getElement()", "getElementsByClassName()", "getElementById()", "querySelector()"],
        answer: 3
    },
];

let index = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[index].question;
    document.getElementById("opt1").innerText = questions[index].options[0];
    document.getElementById("opt2").innerText = questions[index].options[1];
    document.getElementById("opt3").innerText = questions[index].options[2];
    document.getElementById("opt4").innerText = questions[index].options[3];
    document.getElementById("result") = "";
}

function checkAnswer(option) {
    if (option === questions[index].answer) {
        document.getElementById("result").innerText = "Correct ✅";
    } else {
        document.getElementById("result").innerText = "Wrong ❌";
    }
}

function nextQuestion() {
    index++;
    if (index < questions.length) {
        loadQuestion();
    } else {
     document.getElementById("question").innerText= "     Quiz Finished 🎉";
        document.getElementById("result").innerText = "you win";
        
    }
}

loadQuestion();
