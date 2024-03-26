const quizData = [
  {
    question: 'Which breed of dog is from the Mexico?',
    a: 'Chihuahua',
    b: 'Pomeranian',
    c: 'Bulldog',
    d: 'beagle',
    correct: 'a',
  },
  {
    question: 'In which year Javascript launched?',
    a: '1985',
    b: '1990',
    c: '1995',
    d: '2000',
    correct: 'c',
  },
  {
    question: 'What is the captial of the United States?',
    a: 'New york',
    b: 'Washington DC',
    c: 'Alaska',
    d: 'None of the above',
    correct: 'b',
  },
  {
    question: 'What is the most used programming languaged in 2023?',
    a: 'Python',
    b: 'Javascript',
    c: 'C/C++',
    d: 'Java',
    correct: 'a',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}


function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}


submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h3>You answered correctly at ${score}/${quizData.length} questions. </h3>
      <button onClick='location.reload()' class='btn'>Reload</button>`;
    }
  }
});