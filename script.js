
function getEmi() {
    let amount = parseFloat(document.getElementById("amount").value);
    let annualInterestRate = parseFloat(document.getElementById("rate").value);
    let tenure = parseInt(document.getElementById("tenure").value);

    // calculate monthly interest rate

    let monthlyInterestRate = (annualInterestRate / 12) / 100;

    // calculate EMI using the formula

    let emi = (amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)) / 
              (Math.pow(1 + monthlyInterestRate, tenure) - 1);

    // round to 2 decimal places
    
    emi = emi.toFixed(2);

    document.getElementById("emi").innerHTML = "EMI : ₹ " + emi + "/-";
}
