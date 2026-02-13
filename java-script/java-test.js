function check() {
  let score = 0;
  let answers = {
    q1: "c",
    q2: "b",
    q3: "b",
    q4: "c",
    q5: "c",
    q6: "c",
    q7: "d",
    q8: "c",
    q9: "b",
    q10: "a",
  };
  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');
  let q3 = document.querySelector('input[name="q3"]:checked');
  let q4 = document.querySelector('input[name="q4"]:checked');
  let q5 = document.querySelector('input[name="q5"]:checked');
  let q6 = document.querySelector('input[name="q6"]:checked');
  let q7 = document.querySelector('input[name="q7"]:checked');
  let q8 = document.querySelector('input[name="q8"]:checked');
  let q9 = document.querySelector('input[name="q9"]:checked');
  let q10 = document.querySelector('input[name="q10"]:checked');

  if (q1 && q1.value === answers.q1) score++;
  if (q2 && q2.value === answers.q2) score++;
  if (q3 && q3.value === answers.q3) score++;
  if (q4 && q4.value === answers.q4) score++;
  if (q5 && q5.value === answers.q5) score++;
  if (q6 && q6.value === answers.q6) score++;
  if (q7 && q7.value === answers.q7) score++;
  if (q8 && q8.value === answers.q8) score++;
  if (q9 && q9.value === answers.q9) score++;
  if (q10 && q10.value === answers.q10) score++;

  document.getElementById("result").innerHTML = "You Are Scored :" + score;
}

setTimeout(() => {
  document.getElementById("test-box").reset();
  document.getElementById("result").innerHTML = "";
}, 3000);
