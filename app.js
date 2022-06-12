let billAmount = document.getElementById("bill-amount");
let Service = document.getElementById("Ser");
let People = document.getElementById("people");
let tipAmount = document.getElementById("tip-amount");
let calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
  billAmount = Number(billAmount.value);
  People = Number(People.value);
  Service = Number(Service.value);

  if (isNaN(billAmount) || billAmount <= 0 || billAmount === null) {
    alert("Please enter a valid Bill Amount");
  } else if (isNaN(People) || People <= 0 || People === null) {
    alert("Please enter Number Of People");
  } else {
    let calculatedTip = (Service / 100) * billAmount;
    tipAmount.value = calculatedTip;

    let eachTip = calculatedTip / People;
    total.value = "Rs." + eachTip + " " + "Each";
  }
});
