const dhikrType = document.getElementById("dhikr-type-wrap");
const counterNumber = document.querySelector(".counter-number");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const refreshIcon = document.querySelector(".fa-redo");
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const plusIcon = document.querySelector(".plus-icon");
const addCounterBtn = document.querySelector(".add-counter-btn");
const addCounterPopUp = document.querySelector(".add-counter-pop-up");
const addCounterInput = document.querySelector(".add-counter-input");
const saveBtn = document.querySelector(".save-btn");

refreshIcon.addEventListener("click", () => {

    savedCounterNumber = 0;
    counterNumber.innerHTML = 0;

})

menuIcon.addEventListener("click", () => {

    menuIcon.style.backgroundColor = "blue"
    menu.classList.add("menu-visible");

    if (menu.classList == "menu") {

         menu.classList.remove("menu");   
         menu.classList.add("menu-visible");
         
    } else if (menu.classList == "menu-visible") {

        menu.classList.remove("menu-visible");
        menu.classList.add("menu");

    }

});

saveBtn.addEventListener("click", () => {

    

})


let dhikrCounters = []

let popUpMenu = document.createElement("div");
popUpMenu.setAttribute("class", "pop-up-menu");

addCounterBtn.appendChild(popUpMenu); 

plusIcon.addEventListener("click", () => {

    if (addCounterPopUp.classList == "add-counter-pop-up") {

        addCounterPopUp.classList.remove("add-counter-pop-up")
        addCounterPopUp.classList.add("add-counter-pop-up-visible");

    } else if (addCounterPopUp.classList == "add-counter-pop-up-visible") {

        addCounterPopUp.classList.remove("add-counter-pop-up-visible")
        addCounterPopUp.classList.add("add-counter-pop-up");

    } 
   

})

let currentDhikrType;
let savedCounterNumber;

if (localStorage.getItem("savedDhikrType") !== null) {

    localStorage.getItem("savedDhikrType");

} else {

    currentDhikrType = "";

}

dhikrType.innerHTML = currentDhikrType;

if (localStorage.getItem("savedCounterNumber") !== null) {

    savedCounterNumber = localStorage.getItem("savedCounterNumber");
    console.log(savedCounterNumber);

} else if (localStorage.getItem("savedCounterNumber") == null) {

    savedCounterNumber = 0;

}

savedCounterNumber = 0;
counterNumber.innerHTML = savedCounterNumber;

// minusBtn.addEventListener("click", () => {

//     if (savedCounterNumber < 0) {

//         savedCounterNumber--;
//         counterNumber.innerHTML = savedCounterNumber;

//     }

//     // savedCounterNumber > 0 ? counterNumber.innerHTML = savedCounterNumber-- : counterNumber.innerHTML = 0;
//     localStorage.setItem("savedCounterNumber", savedCounterNumber);

// });

plusBtn.addEventListener("click", () => {

    counterNumber.innerHTML = savedCounterNumber+=1;
    console.log("Plus")
    localStorage.setItem("savedCounterNumber", savedCounterNumber);

});