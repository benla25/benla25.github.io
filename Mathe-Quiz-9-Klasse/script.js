const questions = [
    {
        question: "1. Gegenkathete von α durch Ankathete von α ist...",
        answers: ["sin(α)", "cos(α)", "tan(α)", "Nichts davon"],
        correct: 2
    },
    {
        question: "2. Was ist die Innenwinkelsumme eines Dreiecks?",
        answers: ["90°", "180°", "270°", "360°"],
        correct: 1
    },
    {
        question: "3. Was kann man mit π*d berechnen?",
        answers: ["Den Radius des Kreises", "Die Fläche des Kreises", "Den Umfang des Kreises", "Etwas anderes"],
        correct: 2
    },
    {
        question: "4. Wie viele Kosinussätze gibt es?",
        answers: ["1", "2", "3", "4"],
        correct: 2
    },
    {
        question: "5. Was ist das Zeichen für Wahrscheinlichkeit?",
        answers: ["Ω", "P", "E", "R"],
        correct: 1
    },
    {
        question: "6. Was ist falsch?",
        answers: ["a² = b² + c² - 2bc * cos(α)", "b² = a² + c² - 2ac * cos(β)", "c² = a² - b² + 2ab * cos(γ)", "Mehrere"],
        correct: 2
    },
    {
        question: "7. Wofür ist die Mitternachtsformel?",
        answers: [
            "Berechnung des Scheitelpunkts von Parabeln",
            "Berechnung der Schnittpunkte mit der x-Achse von Parabeln",
            "Berechnung der Schnittpunkte mit der y-Achse von Parabeln",
            "Berechnung der Koordinaten des Mittelpunkts von Hyperbeln"
        ],
        correct: 1
    },
    {
        question: "8. Nenne mir den Satz des Pythagoras.",
        answers: ["a+b=c", "a+b=c", "(a+b)²=c²", "a²+b²=c²"],
        correct: 3
    },
    {
        question: "9. Nenne mir die Formel der Diskriminante.",
        answers: ["b-4ac", "b+4ac", "b²-4ac", "-b²-4ac"],
        correct: 2
    },
    {
        question: "10. Wie groß ist Pi?",
        answers: ["3,140", "3,141", "3,142", "Etwas anderes."],
        correct: 3
    }
];


let currentQuestion = 0;
let score = 0;
let timeLeft = 100;
let timer;
let userAnswers = [];
let correctSelections = 0;

function loadQuestion() {
    clearInterval(timer);
    document.getElementById("timer").textContent = `Zeit: 100`;
    document.getElementById("feedback")?.remove(); 
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById("question").textContent = q.question;
        document.querySelectorAll(".answer").forEach((btn, index) => {
            btn.textContent = q.answers[index];
            btn.disabled = false;
            btn.classList.remove("correct", "wrong");
        });
        document.getElementById("score").textContent = `Punktzahl: ${score}`;
        startTimer();
    } else {
        showSummary();
    }
}

function checkAnswer(selected) {
    clearInterval(timer);
    const correctIndex = questions[currentQuestion].correct;
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(btn => (btn.disabled = true));
    buttons[correctIndex].classList.add("correct");
    if (selected !== correctIndex) {
        buttons[selected]?.classList.add("wrong");
    }

    if (selected === correctIndex) {
        score += timeLeft;
        document.getElementById("score").textContent = `Punktzahl: ${score}`;
		correctSelections += 1; 
		document.getElementById("correctSelections").textContent = `Korrekt: ${correctSelections}/10`;
    }

    userAnswers.push({
        selected: questions[currentQuestion].answers[selected] || "Keine Antwort",
        correct: questions[currentQuestion].answers[correctIndex]
    });

    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 2000);
}

function startTimer() {
    timeLeft = 100;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Zeit: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            userAnswers.push({
                selected: "Keine Antwort",
                correct: questions[currentQuestion].answers[questions[currentQuestion].correct]
            });
            currentQuestion++;
            loadQuestion();
        }
    }, 1000);
}

function showSummary() {
    let summaryHTML = `<h1>Quiz beendet!</h1><p>Endpunktzahl: ${score}</p><p>Korrekt: ${correctSelections}`;
    summaryHTML += `<h2>Deine Antworten:</h2><ul>`;
    userAnswers.forEach((answer, index) => {
        summaryHTML += `<li>Frage ${index + 1}: Du hast "${answer.selected}" gewählt. ${
            answer.selected === answer.correct
                ? "Das war richtig."
                : `Richtig wäre: "${answer.correct}".`
        }</li>`;
    });
    summaryHTML += `</ul>`;
    document.getElementById("quiz-container").innerHTML = summaryHTML;
}

loadQuestion();