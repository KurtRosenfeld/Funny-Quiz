const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        image: "images/france.jpg"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        image: "images/theater.jpg",
    },
     {
        question: "Which party was Rudolf Breitscheid not part of",
        options: ["SPD", "KPD", "USPD",],
        answer: "KPD",
        image: "images/Breitscheid und Einstein".jpg"
    },
     {
        question: "are you a legend",
        options: ["yes", "no", "surely"],
        answer: "no"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const imageElement = document.getElementById('question-image');
const nextBtn = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    
    // Handle image display
    if (q.image) {
        imageElement.src = q.image;
        imageElement.style.display = 'block';
    } else {
        imageElement.style.display = 'none';
    }

    optionsElement.innerHTML = '';
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    if (selected === q.answer) {
        score++;
        resultElement.textContent = "Wow!";
    } else {
        resultElement.textContent = `Whore! The answer is ${q.answer}.`;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        nextBtn.style.display = 'block';
    } else {
        showResult();
    }
}

nextBtn.addEventListener('click', () => {
    nextBtn.style.display = 'none';
    resultElement.textContent = '';
    loadQuestion();
});

function showResult() {
    questionElement.textContent = `Bitch, I'm not done with you! Your score: ${score}/${questions.length}`;
    optionsElement.innerHTML = '';
    nextBtn.style.display = 'none';
}

loadQuestion();
