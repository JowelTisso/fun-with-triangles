const btnCheck = document.querySelector(".btn-check");
const outputDiv = document.querySelector(".container-output");
const angle1 = document.querySelector(".angle-1");
const angle2 = document.querySelector(".angle-2");
const angle3 = document.querySelector(".angle-3");

const anglesOfTriangle = () => {
  if (angle1.value && angle2.value && angle3.value) {
    const sum =
      Math.floor(Number(angle1.value)) +
      Math.floor(Number(angle2.value)) +
      Math.floor(Number(angle3.value));

    if (sum == 180) {
      outputDiv.innerText = "Yes, it can form a triangle";
    } else {
      outputDiv.innerText = "Oops!, it can't form a triangle";
    }
  } else {
    outputDiv.innerText = "Please! input all the angles";
  }
};

btnCheck.addEventListener("click", anglesOfTriangle);
