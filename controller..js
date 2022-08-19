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
