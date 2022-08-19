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
console.dir(linkElements);

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
const diceButton = document.querySelector("#statistics button");
const x = document.getElementById("output-total-rolls");
const y = document.getElementById("output-target-number");
const listElement = document.getElementById("dice-rolls");
const userInp = diceInput.value;
function calculateTurns(event){
    let turns = 1;
    let num = Math.floor((Math.random() * 6) + 1);
    x.textContent = turns;
    y.textContent = userInp;
    while(userInp != num){
        let newElement = document.createElement("li");
        num = Math.floor((Math.random() * 6) + 1);
        newElement.textContent = num;
        turns++;
        x.textContent = turns;
        listElement.append(newElement);
    } 
}

diceButton.addEventListener("click",calculateTurns);