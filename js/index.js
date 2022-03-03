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


var savedCountersArray;
var savedCountersJson;

// savedCountersJson = JSON.parse(localStorage.getItem("savedCounters"));
// createCounterList();



if (localStorage.getItem("firstLaunch") == null) {

    console.log("FIRST LAUNCH")
    let savedCounterNumber = 0;

    localStorage.setItem("lastCounter", "Alhumdulillah");
    localStorage.setItem("firstLaunch", "firstLaunch");
    savedCountersArray = [

        {
            
            "counter": "Alhumdulillah",
            "count": 0,
            "lastUsed" : true,

        },

        {

            "counter": "Subhanallah",
            "count": 0,
            "lastUsed" : false,

        },

        {

            "counter": "Allahu-Akbar",
            "count": 0,
            "lastUsed" : false,

        },

        {

            "counter": "Astagfirullah",
            "count": 0,
            "lastUsed" : false

        }
        
        
        ];

    console.log(savedCountersArray);
    localStorage.setItem("savedCounters", JSON.stringify(savedCountersArray));
    // localStorage.setItem("savedCounters", savedCountersArray);

    savedCountersJson = JSON.parse(localStorage.getItem("savedCounters"));
    createCounterList();
    
} else if (localStorage.getItem("firstLaunch") !== null) {

    // savedCountersArray = JSON.parse(localStorage.getItem("savedCounters"));
    savedCountersJson = JSON.parse(localStorage.getItem("savedCounters"));
    // savedCounterNumber;
    // dhikrType.innerHTML = lastSavedCounter;
    createCounterList();

}

var individualCounterDiv;
function createCounterList() {

    for (var i = 0; i < JSON.parse(localStorage.getItem("savedCounters")).length; i++) {

        individualCounterDiv = document.createElement("div");
        individualCounterDiv.setAttribute("class", "individual-counter-div");
        individualCounterDiv.innerHTML = `<div class="menu-counter-wrap"><span class="menu-counter-name">${JSON.parse(localStorage.getItem("savedCounters"))[i].counter}</span> <span class="counter-number-span">${JSON.parse(localStorage.getItem("savedCounters"))[i].count}</span><span class="xicon" id=${i}>X</span></div>`;
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


}

document.querySelectorAll(".menu-counter-wrap").forEach(function(item) {
    
    item.addEventListener("click", (e) => {

        let currentCounter = e.target.childNodes[0].textContent;
        let currentCounterNumber;

        if (e.target.parentNode.childNodes[2].textContent) {

            // currentCounterNumber = e.target.parentNode.childNodes[2].textContent;
            counterNumber.innerHTML = savedCounterNumber;
            savedCounterNumber = e.target.parentNode.childNodes[2].textContent;

        }

        
        dhikrType.innerHTML = currentCounter;
        menu.classList.remove("menu-visible");
        menu.classList.add("menu");
        // console.log(e.target.parentNode);
        console.log(currentCounterNumber)

    })

});



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


// // dhikrType.innerHTML = currentDhikrType;

// savedCounterNumber = 0;
// counterNumber.innerHTML = savedCounterNumber;

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

    // let matchCounter = savedCountersJson.find( (element) => {

    //     return element == dhikrType.innerHTML;

    // })

    for (let i = 0; i < savedCountersJson.length; i++) {

        // console.log(savedCountersJson[i])

        if (savedCountersJson[i].counter == dhikrType.innerHTML) {

            console.log(savedCountersJson[i].counter);
            savedCountersJson[i].count = savedCounterNumber;
            console.log(savedCountersJson)
            localStorage.setItem("savedCounters", JSON.stringify(savedCountersJson));

        }


    }

});