const counterNumber = document.querySelector(".counter-number");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");

let savedCounterNumber;

if (localStorage.getItem("savedCounterNumber") !== null) {

    savedCounterNumber = localStorage.getItem("savedCounterNumber");
    console.log(savedCounterNumber);

} else if (localStorage.getItem("savedCounterNumber") == null) {

    savedCounterNumber = 0;

}

counterNumber.innerHTML = savedCounterNumber;

minusBtn.addEventListener("click", () => {

    savedCounterNumber > 0 ? counterNumber.innerHTML = savedCounterNumber-- : counterNumber.innerHTML = 0;
    localStorage.setItem("savedCounterNumber", savedCounterNumber);

});

plusBtn.addEventListener("click", () => {

    counterNumber.innerHTML = savedCounterNumber++;
    localStorage.setItem("savedCounterNumber", savedCounterNumber);

});