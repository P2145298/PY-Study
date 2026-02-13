function check() {
  let score = 0;

  const answers = {
    q1: "a",
    q2: "a",
    q3: "b",
    q4: "a",
    q5: "c",
    q6: "a",
    q7: "c",
    q8: "b",
    q9: "a",
    q10: "b",
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
