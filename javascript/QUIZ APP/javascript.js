const quizQuestion = [
  {
    id: 1,
    question: "What is the chemical symbol for water?",
    options: [
      { text: "CO2", isCorrect: false },
      { text: "H2O", isCorrect: true },
      { text: "O2", isCorrect: false },
      { text: "CH4", isCorrect: false },
    ],
    explanation: "H2O is the chemical symbol for water",
  },
  {
    id: 2,
    question: "Who wrote the play “Romeo and Juliet”?",
    options: [
      { text: "William Shakespeare", isCorrect: true },
      { text: "Jane Austen", isCorrect: false },
      { text: "Charles Dickens", isCorrect: false },
      { text: "Mark Twain", isCorrect: false },
    ],
    explanation: "William Shakespeare wrote the play “Romeo and Juliet”",
  },
  {
    id: 3,
    question: "Which planet is known as the “Red Planet”?",
    options: [
      { text: "Mars", isCorrect: true },
      { text: "Venus", isCorrect: false },
      { text: "Jupiter", isCorrect: false },
      { text: "Saturn", isCorrect: false },
    ],
    explanation: "Mars is known as the “Red Planet”.",
  },
  {
    id: 4,
    question: "What is the currency of Denmark?",
    options: [
      { text: "Kroner", isCorrect: true },
      { text: "Pound", isCorrect: false },
      { text: "Dollar", isCorrect: false },
      { text: "Rupees", isCorrect: false },
    ],
    explanation: "Kroner is the currency of Denmark.",
  },
];

// Creating form and styling the form
const form = document.createElement("form");
document.body.appendChild(form);
form.style.alignItems = "center";
form.style.margin = "2%";

// Creating div elements for questions and answers
for (let i = 0; i < quizQuestion.length; i++) {
  if (quizQuestion[i].question.length < 140) {
    const divQuestion = document.createElement("div");
    divQuestion.setAttribute("id", "question-" + quizQuestion[i].id);
    form.appendChild(divQuestion);
    divQuestion.innerText =
      quizQuestion[i].id + ". " + quizQuestion[i].question;

    const divAnswers = document.createElement("div");
    divAnswers.setAttribute("id", "answers");
    divQuestion.appendChild(divAnswers);

    for (let j = 0; j < quizQuestion[i].options.length; j++) {
      const button = document.createElement("button");
      button.setAttribute("class", "btnoptions");
      button.innerText = quizQuestion[i].options[j].text;
      button.dataset.isCorrect = quizQuestion[i].options[j].isCorrect;

      divAnswers.appendChild(button);
      button.style.display = "block";
      button.addEventListener("click", uponClicking);
    }

    // Creating button for randomizing the options
    const buttonRandom = document.createElement("button");
    buttonRandom.innerText = "Shuffle";
    buttonRandom.setAttribute("class", "Shuffle");
    divAnswers.appendChild(buttonRandom);
    buttonRandom.style.borderRadius = "40%";
    buttonRandom.addEventListener("click", shuffleOptions);

    // Adding explanation div
    const divExplanation = document.createElement("div");
    divExplanation.classList.add("explanation");
    divExplanation.style.display = "none";
    divQuestion.appendChild(divExplanation);
  }
}

function uponClicking(event) {
  event.preventDefault();
  const buttons = event.target.parentElement.querySelectorAll(".btnoptions");
  const currentQuestion = event.target.closest("div[id^='question']");
  const questionId = currentQuestion.id.split("-")[1];
  const quizItem = quizQuestion.find((q) => q.id == questionId);
  const selectedButton = event.target;

  for (let button of buttons) {
    if (button.dataset.isCorrect === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    } else {
      button.classList.remove("correct", "incorrect");
    }
    button.disabled = true;
  }
  const explanation = currentQuestion.querySelector(".explanation");
  explanation.innerText = quizItem.explanation;
  explanation.style.display = "block";
}

function shuffleOptions(event) {
  event.preventDefault();
  const buttons = event.target.parentElement.querySelectorAll(".btnoptions");
  const buttonOptions = Array.from(buttons).map((button) => button.innerText);
  for (let i = buttonOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [buttonOptions[i], buttonOptions[j]] = [buttonOptions[j], buttonOptions[i]];
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = buttonOptions[i];
  }
}
