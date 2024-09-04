document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "What is the chemical symbol for water?",
            options: ["H₂O", "CO₂", "NaCl"],
            answer: "H₂O"
        },
        {
            lesson: "Which planet is known as the Red Planet?",
            options: ["Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },
        {
            lesson: "What is the basic unit of life?",
            options: ["Cell", "Atom", "Molecule"],
            answer: "Cell"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
