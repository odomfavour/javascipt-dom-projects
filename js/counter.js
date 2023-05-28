let currentNumber = 0;
let value = document.getElementById("value");
value.innerText = currentNumber;

let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let clickedBtn = event.target;
    if (clickedBtn.classList.contains("decrease")) {
      currentNumber--;
    } else if (clickedBtn.classList.contains("increase")) {
      currentNumber++;
    } else {
      currentNumber = 0;
    }
    value.innerText = currentNumber;
  });
});
