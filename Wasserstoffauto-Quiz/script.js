const questions = [
    {
        question: "1. Das erste Wasserstofffahrzeug, das in Nürnberg gefahren ist, ist ein...",
        answers: ["Bus", "LKW", "Privatauto", "Taxi"],
        correct: 1
    },
    {
        question: "2. Wie weit kann ein modernes Wasserstoffauto fahren?",
        answers: ["650 km", "450 km", "1000 km", "300 km"],
        correct: 0
    },
    {
        question: "3. Welches Element wird für Wasserstoffautos als Brennstoff verwendet?",
        answers: ["Stickstoff", "Wasserstoff", "Sauerstoff", "Helium"],
        correct: 1
    },
    {
        question: "4. Wie lange dauert das Tanken eines Wasserstoffautos?",
        answers: ["2-3 Minuten", "15-20 Minuten", "30 Minuten", "5-10 Minuten"],
        correct: 3
    },
    {
        question: "5. Wie viele Wasserstofftankstellen gibt es etwa in Deutschland?",
        answers: ["500", "1000", "150", "50"],
        correct: 2
    },
    {
        question: "6. Welches Unternehmen produziert den Mirai, ein beliebtes Wasserstoffauto?",
        answers: ["Honda", "Tesla", "BMW", "Toyota"],
        correct: 3
    },
    {
        question: "7. Was ist der Hauptvorteil von Wasserstoffautos?",
        answers: [
            "Keine Schadstoffemissionen",
            "Geringe Herstellungskosten",
            "Keine Infrastruktur notwendig",
            "Längere Ladezeit"
        ],
        correct: 0
    },
    {
        question: "8. Welcher dieser Fahrzeugtypen wird oft als Wasserstofffahrzeug getestet?",
        answers: ["Traktor", "Schiff", "Motorrad", "U-Bahn"],
        correct: 1
    },
    {
        question: "9. Was ist das Hauptnebenprodukt eines Wasserstoffautos?",
        answers: ["Wasser", "CO₂", "Methan", "Stickstoff"],
        correct: 0
    },
    {
        question: "10. Welches Land hat die meisten Wasserstofftankstellen?",
        answers: ["Japan", "China", "Deutschland", "USA"],
        correct: 0
    }
];


let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timer;
let userAnswers = [];
let correctSelections = 0;

function loadQuestion() {
    clearInterval(timer);
    document.getElementById("timer").textContent = `Zeit: 60`;
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
    timeLeft = 60;
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