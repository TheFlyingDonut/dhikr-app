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
var xIcon;


let savedCountersArray;
var savedCountersJson;

// savedCountersJson = JSON.parse(localStorage.getItem("savedCounters"));
// createCounterList();



if (localStorage.getItem("firstLaunch") == null) {

    localStorage.setItem("lastCounter", "Alhumdulillah");
    localStorage.setItem("firstLaunch", false);
    savedCountersArray = [];
    savedCountersArray.push("Alhumdulillah", "Subhanallah", "Allahu-Akbar", "Astagfirullah");
    console.log(savedCountersArray);
    localStorage.setItem("savedCounters", JSON.stringify(savedCountersArray));
    savedCountersJson = JSON.parse(localStorage.getItem("savedCounters"));
    console.log("firstlaunch")
    createCounterList();
    
} else if (localStorage.getItem("firstLaunch") !== null) {

    // savedCountersArray = JSON.parse(localStorage.getItem("savedCounters"));
    savedCountersJson = JSON.parse(localStorage.getItem("savedCounters"));
    let lastSavedCounter = localStorage.getItem("lastCounter");
    dhikrType.innerHTML = lastSavedCounter;
    createCounterList();

}

function createCounterList() {

    for (var i = 0; i < JSON.parse(localStorage.getItem("savedCounters")).length; i++) {

        var individualCounterDiv = document.createElement("div");
        individualCounterDiv.setAttribute("class", "individual-counter-div");
        individualCounterDiv.innerHTML = `<div class="menu-counter-wrap"><span class="menu-counter-name">${JSON.parse(localStorage.getItem("savedCounters"))[i]}</span><span class="xicon" id=${i}>X</span></div>`;
        addCounterPopUp.appendChild(individualCounterDiv);

        // console.log(individualCounterDiv)

      
        document.getElementById(i).addEventListener("click", (e) => {

            console.log("X clicked")
            individualCounterDiv.remove();
            // JSON.parse(localStorage.getItem("savedCounters")).splice(e.target.id, 1);
            savedCountersJson.splice(e.target.id, 1);
            console.log(savedCountersJson)
            localStorage.setItem("savedCounters", JSON.stringify(savedCountersJson));
            console.log(savedCountersJson);

        })
        

    }

    individualCounterDiv.addEventListener("click", (e) => {

        console.log(e.target)
    
    
    });


    

}

refreshIcon.addEventListener("click", () => {

    savedCounterNumber = 0;
    counterNumber.innerHTML = 0;

})

menuIcon.addEventListener("click", () => {

    menu.classList.add("menu-visible");

    if (menu.classList == "menu") {

         menu.classList.remove("menu");   
         menu.classList.add("menu-visible");
         
    } else if (menu.classList == "menu-visible") {

        menu.classList.remove("menu-visible");
        menu.classList.add("menu");

    }

    if (addCounterPopUp.classList == "add-counter-pop-up") {

        addCounterPopUp.classList.remove("add-counter-pop-up");
        addCounterPopUp.classList.add("add-counter-pop-up-visible");

    } else if (addCounterPopUp.classList == "add-counter-pop-up-visible") {

        addCounterPopUp.classList.remove("add-counter-pop-up-visible");       
        addCounterPopUp.classList.add("add-counter-pop-up");

    } 

});

saveBtn.addEventListener("click", () => {

    let individualCounterDiv = document.createElement("div");
    individualCounterDiv.innerHTML = `<div class="menu-counter-wrap"><span class="menu-counter-name">${addCounterInput.value}</span><span class="x-icon">X</span></div>`;
    individualCounterDiv.setAttribute("class", "individual-counter-div");
    addCounterPopUp.appendChild(individualCounterDiv);
    savedCountersJson.push(addCounterInput.value);
    addCounterInput.value = "";
    console.log(savedCountersJson)
    localStorage.setItem("savedCounters", JSON.stringify(savedCountersJson));

    document.querySelectorAll(".individual-counter-div").forEach(item => {

        item.remove();

    })

    createCounterList();


});

let popUpMenu = document.createElement("div");
popUpMenu.setAttribute("class", "pop-up-menu");



// addCounterBtn.appendChild(popUpMenu); 

// plusIcon.addEventListener("click", () => {


   

// })

// let currentDhikrType;
let savedCounterNumber;

// dhikrType.innerHTML = currentDhikrType;

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
    localStorage.setItem("savedCounterNumber", JSON.stringify(savedCounterNumber));

});