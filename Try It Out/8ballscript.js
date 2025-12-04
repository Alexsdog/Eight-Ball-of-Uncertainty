const answers = [
  "8ball....png",
  "8ballMaybe.png",
  "8ballperhaps.png",
  "8ballTryagain.png"
];

function shakeBall() {
  const question = document.getElementById("question").value.trim();
  const answerImage = document.getElementById("answerImage");
  
  const randomIndex = Math.floor(Math.random() * answers.length);
  const imagePath = answers[randomIndex];

  answerImage.src = imagePath;
  answerImage.style.display = "block";
}
