function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const quiz = document.getElementById("quiz");
const scoreEl = document.getElementById("score");
const errorsEl = document.getElementById("errors");
const restartBtn = document.getElementById("restartBtn");
const progressCorrect = document.getElementById("progressCorrect");
const progressWrong = document.getElementById("progressWrong");

const TOTAL = questions.length;

let gameQuestions = JSON.parse(localStorage.getItem("gameQuestions"));
let state = JSON.parse(localStorage.getItem("state"));

function initGame() {
  gameQuestions = JSON.parse(JSON.stringify(questions));
  shuffle(gameQuestions);
  gameQuestions.forEach(q => shuffle(q.answers));

  state = { answered: {}, correct: 0, errors: 0 };
  localStorage.setItem("gameQuestions", JSON.stringify(gameQuestions));
  localStorage.setItem("state", JSON.stringify(state));
}

if (!gameQuestions || !state || gameQuestions.length !== TOTAL) {
  initGame();
}

function render() {
  quiz.innerHTML = "";
  gameQuestions.forEach((q, index) => {
    const block = document.createElement("div");
    block.className = "question";
    block.innerHTML = `<h2>Вопрос ${q.id} из ${TOTAL}</h2><p>${q.text}</p>`;

    const answersDiv = document.createElement("div");
    answersDiv.className = "answers";

    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.textContent = answer.text;

      if (state.answered[index]) {
        btn.disabled = true;
        if (answer.correct) btn.classList.add("correct");
        if (!answer.correct && state.answered[index] === answer.text) btn.classList.add("wrong");
      }

      btn.onclick = () => {
        if (state.answered[index]) return;
        state.answered[index] = answer.text;
        answer.correct ? state.correct++ : state.errors++;
        localStorage.setItem("state", JSON.stringify(state));
        render();
        
        // Скроллим к следующему вопросу
        setTimeout(() => {
            const next = quiz.children[index + 1];
            if (next) next.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      };
      answersDiv.appendChild(btn);
    });

    block.appendChild(answersDiv);
    quiz.appendChild(block);
  });

  scoreEl.textContent = `${state.correct} / ${TOTAL}`;
  errorsEl.textContent = `Ошибки: ${state.errors}`;
  progressCorrect.style.width = (state.correct / TOTAL) * 100 + "%";
  progressWrong.style.width = (state.errors / TOTAL) * 100 + "%";
}

restartBtn.onclick = () => {
  if (confirm("Начать тест заново?")) {
    localStorage.clear();
    initGame();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

render();