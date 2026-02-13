function check() {
  let score = 0;

  const answers = {
    q1: "c",
    q2: "c",
    q3: "c",
    q4: "b",
    q5: "c",
    q6: "a",
    q7: "c",
    q8: "b",
    q9: "b",
    q10: "c",
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
