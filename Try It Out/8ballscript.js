const answers = [
  "It is certain.",
  "Without a doubt.",
  "You may rely on it.",
  "Most likely.",
  "Ask again later.",
  "Reply hazy, try again.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Don't count on it.",
  "My reply is no.",
  "Very doubtful."
];

function shakeBall() {
  const question = document.getElementById("question").value.trim();
  const answerDiv = document.getElementById("answer");

  if (question === "") {
    answerDiv.textContent = "Ask a question first!";
    return;
  }

  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomIndex];

  answerDiv.textContent = randomAnswer;
}