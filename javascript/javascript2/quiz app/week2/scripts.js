const quizQuestions = [];

document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const question = document.getElementById('question').value;
  const option1 = document.getElementById('option1').value;
  const option2 = document.getElementById('option2').value;
  const option3 = document.getElementById('option3').value;
  const option4 = document.getElementById('option4').value;
  const correctOption = document.getElementById('correctOption').value;
  
  const newQuestion = {
    question,
    options: [
      { text: option1, isCorrect: correctOption == 1 },
      { text: option2, isCorrect: correctOption == 2 },
      { text: option3, isCorrect: correctOption == 3 },
      { text: option4, isCorrect: correctOption == 4 }
    ],
    explanation: "The correct answer is option " + correctOption
  };
  
  quizQuestions.push(newQuestion);
  displayQuestions(quizQuestions);
  
  // Reset form fields
  document.getElementById('quizForm').reset();
});

function displayQuestions(questions) {
  const container = document.getElementById('questionsContainer');
  container.innerHTML = '';

  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question-block');
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      <ul>
        <li>${q.options[0].text}</li>
        <li>${q.options[1].text}</li>
        <li>${q.options[2].text}</li>
        <li>${q.options[3].text}</li>
      </ul>
      <button onclick="revealAnswer(${index})">Reveal Answer</button>
      <div class="explanation" style="display: none;">${q.explanation}</div>
    `;
    container.appendChild(questionDiv);
  });
}

function revealAnswer(index) {
  const explanations = document.getElementsByClassName('explanation');
  explanations[index].style.display = 'block';
}

function filterQuestions() {
  const searchText = document.getElementById('search').value.toLowerCase();
  const filteredQuestions = quizQuestions.filter(q => q.question.toLowerCase().includes(searchText));
  displayQuestions(filteredQuestions);
}
