document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { question: "JavaScript is a case-sensitive language.", answer: true },
        { question: "let and var are identical in JavaScript.", answer: false },
        { question: "JavaScript can be used to create mobile apps.", answer: true },
        { question: "The '===' operator checks both value and type.", answer: true },
        { question: "setTimeout() is used to execute a function immediately.", answer: false },
        { question: "Arrow functions can be used to define methods inside objects.", answer: false },
        { question: "JavaScript is a compiled language.", answer: false },
        { question: "NaN stands for 'Not a Number'.", answer: true },
        { question: "A closure is a function that has access to variables from its parent scope.", answer: true },
        { question: "JavaScript supports multiple inheritance.", answer: false },
        { question: "The 'typeof' operator returns 'array' when used on an array.", answer: false },
        { question: "You can use 'const' to declare a variable that never changes.", answer: true },
        { question: "'null' and 'undefined' are the same in JavaScript.", answer: false },
        { question: "LocalStorage allows you to store data that persists after closing the browser.", answer: true },
        { question: "JavaScript runs only on web browsers.", answer: false },
        { question: "Functions in JavaScript are first-class objects.", answer: true },
        { question: "Async/Await is used to handle synchronous programming.", answer: false },
        { question: "The 'this' keyword in JavaScript always refers to the global object.", answer: false },
        { question: "Objects in JavaScript are mutable.", answer: true },
        { question: "JavaScript supports destructuring assignment.", answer: true }
    ];

    let score = 0;
    let currentQuestion = null;

    function getRandomQuestion() {
        return questions[Math.floor(Math.random() * questions.length)];
    }

    function showQuestion() {
        currentQuestion = getRandomQuestion();
        document.getElementById("question").textContent = currentQuestion.question;
    }

    function checkAnswer(userAnswer) {
        if (currentQuestion && userAnswer === currentQuestion.answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
        document.getElementById("score").textContent = `Score: ${score}`;
        showQuestion();
    }

    document.getElementById("trueBtn").addEventListener("click", () => checkAnswer(true));
    document.getElementById("falseBtn").addEventListener("click", () => checkAnswer(false));

    showQuestion();
});
