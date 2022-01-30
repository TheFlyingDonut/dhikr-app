const dhikrType = document.getElementById("dhikr-type-wrap");
const counterNumber = document.querySelector(".counter-number");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const refreshIcon = document.querySelector(".fa-redo");

refreshIcon.addEventListener("click", () => {

    savedCounterNumber = 0;
    counterNumber.innerHTML = 0;

})


let currentDhikrType;



let savedCounterNumber;

if (localStorage.getItem("savedDhikrType") !== null) {

    localStorage.getItem("savedDhikrType");

} else {

    currentDhikrType = "Alhumdulillah";

}

dhikrType.innerHTML = currentDhikrType;

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