const btnCheck = document.querySelector(".btn-check");
const outputDiv = document.querySelector(".container-output");
const breadthInput = document.querySelector(".input-breadth");
const heightInput = document.querySelector(".input-height");

const hypotenuseOfTriangle = () => {
  const breadth = Math.floor(Number(breadthInput.value));
  const height = Math.floor(Number(heightInput.value));
  if (breadth && height) {
    const hypotenuse = Math.sqrt(breadth ** 2 + height ** 2);
    outputDiv.innerText =
      "Therefore, Hypotenuse = " + Math.floor(hypotenuse) + " unit";
  } else {
    outputDiv.innerText = "Please input the values!";
  }
};

btnCheck.addEventListener("click", hypotenuseOfTriangle);
