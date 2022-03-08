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
var savedCounterNumber;
// savedCountersJson = JSON.parse(localStorage.getItem("savedCounters"));
// createCounterList();



if (localStorage.getItem("firstLaunch") == null) {

    console.log("FIRST LAUNCH")
    savedCounterNumber = 0;
    counterNumber.innerHTML = savedCounterNumber;

    lastUsedCounter = [

        {
            counter : "Alhumdulillah",
            count: 0

        }

    ]

    localStorage.setItem("lastUsedCounter", JSON.stringify(lastUsedCounter));    
    savedCounter = JSON.parse(localStorage.getItem("lastUsedCounter"));
    
    dhikrType.innerHTML = savedCounter[0].counter;
    counterNumber.innerHTML = savedCounter[0].count;
    localStorage.setItem("firstLaunch", "firstLaunch");

    savedCountersArray = [

        {
            
            "counter": "Alhumdulillah",
            "count": 0,

        },

        {

            "counter": "Subhanallah",
            "count": 0,

        },

        {

            "counter": "Allahu-Akbar",
            "count": 0,

        },

        {

            "counter": "Astagfirullah",
            "count": 0,

        }
        
        
        ];

    console.log(savedCountersArray);
    localStorage.setItem("savedCounters", JSON.stringify(savedCountersArray));
    // localStorage.setItem("savedCounters", savedCountersArray);

    savedCountersJson = JSON.parse(localStorage.getItem("savedCounters"));
    createCounterList();
    
} else if (localStorage.getItem("firstLaunch") !== null) {

    // savedCounterNumber = localStorage.getItem("lastCounterNumber");
    savedCounterNumber = JSON.parse(localStorage.getItem("lastUsedCounter"))[0].count;
    counterNumber.innerHTML = savedCounterNumber;
    
    savedCountersJson = JSON.parse(localStorage.getItem("savedCounters"));
    savedCounter = JSON.parse(localStorage.getItem("lastUsedCounter"));
    console.log(savedCounter[0].counter)
    dhikrType.innerHTML = savedCounter[0].counter;
    counterNumber.innerHTML = savedCounter[0].count;
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

        if (e.target.parentNode.childNodes[2].textContent) {

            counterNumber.innerHTML = savedCounterNumber;
            savedCounterNumber = e.target.parentNode.childNodes[2].textContent;

        }

        
        dhikrType.innerHTML = e.target.parentNode.childNodes[0].textContent;
        counterNumber.innerHTML = e.target.parentNode.childNodes[2].textContent;

        lastUsedCounter = [

            {
                counter : e.target.parentNode.childNodes[0].textContent,
                count: 0
    
            }
    
        ]

        localStorage.setItem("lastUsedCounter", JSON.stringify(lastUsedCounter))
        // menu.classList.remove("menu-visible");
        // menu.classList.add("menu");
        


    })

});

refreshIcon.addEventListener("click", () => {

    savedCounterNumber = 0;
    counterNumber.innerHTML = savedCounterNumber;

    for (let i = 0; i < savedCountersJson.length; i++) {

        if (savedCountersJson[i].counter == dhikrType.innerHTML) {
  
            savedCountersJson[i].count = savedCounterNumber;
            localStorage.setItem("savedCounters", JSON.stringify(savedCountersJson));

        }


    }

})

menuIcon.addEventListener("click", () => {

    // menu.classList.add("menu-visible");

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

    savedCountersJson.push(
        
         {

            counter: addCounterInput.value,
            count: 0

         }   
        
         );

    addCounterInput.value = "";
    console.log(savedCountersJson);
    localStorage.setItem("savedCounters", JSON.stringify(savedCountersJson));

    document.querySelectorAll(".individual-counter-div").forEach(item => {

        item.remove();

    })

    createCounterList();


});

let popUpMenu = document.createElement("div");
popUpMenu.setAttribute("class", "pop-up-menu");

plusBtn.addEventListener("click", () => {

    // console.log("plus")
    savedCounterNumber++;
    counterNumber.innerHTML = savedCounterNumber;

    localStorage.setItem("lastCounterNumber", savedCounterNumber);

    for (let i = 0; i < savedCountersJson.length; i++) {

        if (savedCountersJson[i].counter == dhikrType.innerHTML) {

            savedCountersJson[i].count = savedCounterNumber;
            localStorage.setItem("savedCounters", JSON.stringify(savedCountersJson));

        }


    }

    lastUsedCounter = [

        {
            counter : dhikrType.innerHTML,
            count: savedCounterNumber

        }

    ]

    document.querySelectorAll(".individual-counter-div").forEach(item => {

        item.remove();

    })
    
    createCounterList();

    localStorage.setItem("lastUsedCounter", JSON.stringify(lastUsedCounter));    

});