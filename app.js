// Initializing the variables
let cost = 0;
let tip = 0;
let total = 0;

function calculateTip() {
    cost = Number(document.getElementById("cost").value);
    tip = Number(document.getElementById("tip").value / 100);
    total = (cost*tip) + cost;
    document.getElementById("Total").innerHTML = total;
}

