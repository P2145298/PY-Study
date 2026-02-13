function check() {
  let score = 0;

  const answers = {
    q1: "a",
    q2: "b",
    q3: "a",
    q4: "b",
    q5: "b",
    q6: "b",
    q7: "a",
    q8: "b",
    q9: "b",
    q10: "a",
  };

  for (let key in answers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  document.getElementById("result").innerHTML =
    "Your Score: " + score + " / 10";

  setTimeout(() => {
    document.getElementById("test-box").reset();
    document.getElementById("result").innerHTML = "";
  }, 3000);
}
