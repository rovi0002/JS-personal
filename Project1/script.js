let score = 0;

const questionList = [
    {
        question: "What is the meaning of HTML?",
        options: [
            "HyperText Markup Language",
            "Hyper Tryout Makeup Literal",
            "Hydro-Tetra Man-Land",
            "HyperText Markdown Language"
        ],
        answer: "0"
    },
    {
        question: "What is the best OS?",
        options: [
            "Windows",
            "Linux",
            "Android",
            "Depends, but definitely not macOs"
        ],
        answer: "3"
    },
    {
        question: "Do you like JS?",
        options: [
            "No, I am not good enough",
            "No, I am coding in Scratch",
            "Yes, I like money"
        ],
        answer: "2"
    },
    {
        question: "Do you use ChatGPT to help you with learning?",
        options: [
            "No, I am a boomer and fear all new technology. Yesterday I broke my fridge after watching Terminator",
            "No, I only use it to annoy AI, since it's left leaning",
            "Yes, I copy-paste off it, got a job this way btw.",
            "Yes, I prompt it to be my professor"
        ],
        answer: "3"
    },
    {
        question: "Do you like money?",
        options: [
            "Yes (start coding)",
            "No (don't code)"
        ],
        answer: "0"
    }
];

for (let i = 0; i < questionList.length; i++) {
    console.log(questionList[i].question);

    for (let j = 0; j < questionList[i].options.length; j++) {
        console.log(j + ": " + questionList[i].options[j]);
    }
    let userAnswer = prompt("Enter your answer: ");
    if (userAnswer === questionList[i].answer) {
        score++;
    }
}

if(score < 2) {
    alert("You have scored 20%. Study more!");
} else if (score < 3) {
    alert("You have scored 40%. Lame.");
} else if (score < 4) {
    alert("You have scored 60%. Passed... kind of.");
} else if (score < 5) {
    alert("You have scored 80%. Not bad!");
} else {
    alert("You scored 100%. Your fate is to be a programmer.")
}