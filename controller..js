//              First Part
const calInput = document.getElementById("user-number");
const calOutput = document.getElementById("calculated-sum");
const calButton = document.querySelector("#calculator button");

function calculateSum (event){

let num = calInput.value;
let sum = (num * (++num)) / 2;
calOutput.textContent = sum;
calOutput.style.display = "block";
}

calButton.addEventListener("click", calculateSum);

//             Second Part
const linkElements = document.querySelectorAll("#highlight-links a");

function highlightLink(event){
    linkElements.forEach(element => {
        element.classList.add("highlight");
    });
}

const highButton = document.querySelector("#highlight-links button");
highButton.addEventListener("click", highlightLink);

//               Third Part
const listElement1 = document.getElementById("output-user-data");
const userbtn = document.querySelector("#user-data button");
let dummyData = {
    Name : "Wael",
    age : 25,
    Qualification : "Graduate",
}

function displayData(event){
    listElement1.innerHTML = "";
    for (const key in dummyData) {
        let newElement = document.createElement("li");
        let content = key.toUpperCase()+" : "+dummyData[key];
        newElement.textContent = content;
        listElement1.append(newElement);
    }
}

userbtn.addEventListener("click",displayData);


//               Fourth Part

const diceInput = document.getElementById("user-target-number");

const listElement = document.getElementById("dice-rolls");
const x = document.getElementById("output-total-rolls");
const y = document.getElementById("output-target-number");

function calculateTurns(event){
    listElement.innerHTML = "";

    const userInp = diceInput.value;
    y.textContent = userInp;
    
    let turns = 0;
    let num = 0;

     while(!(userInp == num)){

         num = Math.floor((Math.random() * 6) + 1);
         turns++;

         let newElement = document.createElement("li");        
         newElement.textContent = "Roll "+turns+" : "+num;
         listElement.append(newElement);
         
         x.textContent = turns;         

     } 
}

const diceButton = document.querySelector("#statistics button");
diceButton.addEventListener("click",calculateTurns);