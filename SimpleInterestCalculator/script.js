function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(p) + parseFloat(interest);
    var result = document.getElementById("result");

    if(p <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        // Modifies HTML text to send a custom message
        result.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }
    
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

