let questions = [
    {
        question: "What is JavaScript?",
        options: ["Programming Language", "Database", "Browser", "OS"],
        answer: 0
    },
    {
        question: "Which tag is used for JS?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: 2
    },
    {
        question: "Which symbol is used for comments?",
        options: ["//", "##", "<!-- -->", "**"],
        answer: 0
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "variable"],
        answer: 1
    },
    {
        question: "Which function is used to print output in JavaScript?",
        options: ["console.log()", "print()", "output()", "display()"],
        answer: 0
    },
    {
        question: "JavaScript code is executed in the ______.",
        options: ["server", "compiler", "browser", "database"],
        answer: 3
    },
    {
        question: "Which operator is used for addition in JavaScript?",
        options: ["+", "-", "*", "/"],
        answer: 0
    },
    
];

let index = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[index].question;
    document.getElementById("opt1").innerText = questions[index].options[0];
    document.getElementById("opt2").innerText = questions[index].options[1];
    document.getElementById("opt3").innerText = questions[index].options[2];
    document.getElementById("opt4").innerText = questions[index].options[3];
    document.getElementById("result").innerText = "";
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
        document.getElementById("question").innerText = "Quiz Finished 🎉";
        document.getElementById("result").innerText = "";
    }
}

loadQuestion();
