// Initializing the variables
let cost = 0;
let tip = 0;
let total = 0;

function calculateTip() {
    cost = document.getElementById("cost").value;
    tip = document.getElementById("tip").value / 100;
    total = (cost*tip) + tip;
}

document.getElementById("Total").innerHTML = total;