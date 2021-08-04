const btnCheck = document.querySelector(".btn-check");
const outputDiv = document.querySelector(".container-output");
// Area of triangle
const breadthInput = document.querySelector(".input-breadth");
const heightInput = document.querySelector(".input-height");

const areaOfTriangle = () => {
  const breadth = Math.floor(Number(breadthInput.value));
  const height = Math.floor(Number(heightInput.value));
  if (breadth && height) {
    const area = (1 / 2) * breadth * height;
    outputDiv.innerText = "Therefore, Area = " + area + " unit";
  } else {
    outputDiv.innerText = "Please input the values!";
  }
};

btnCheck.addEventListener("click", areaOfTriangle);
