const form = document.querySelector(".container-form");
const btnSubmit = document.querySelector(".btn-submit");
const btnReset = document.querySelector(".btn-reset");
const outputDiv = document.querySelector(".container-output");

const correctAns = ["3", "180", "90", "Right", "36", "Equilateral triangle"];
var givenAns = [];
var score = 0;

const onSubmitListener = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const values = formData.values();

  for (const ans of values) {
    givenAns.push(ans);
  }
  if (givenAns.length === correctAns.length) {
    for (var i = 0; i < givenAns.length; i++) {
      if (givenAns[i] === correctAns[i]) {
        score = score + 1;
      }
    }
    btnSubmit.style.display = "none";
    btnReset.style.display = "block";

    outputDiv.innerText = "You Scored = " + score;
  } else {
    outputDiv.innerText = "Please input all answer";
    givenAns = [];
  }
};

const resetForm = () => {
  form.reset();
  givenAns = [];
  score = 0;
  btnSubmit.style.display = "inline";
  btnReset.style.display = "none";
};

form.addEventListener("submit", onSubmitListener);
btnReset.addEventListener("click", resetForm);
