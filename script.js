function celciusToFahrenheit(){
    var celcius = document.getElementById("c").value;
    var f = (celcius*9/5)+32;
    document.getElementById("f").value = f;
}

function kilogramsToPounds(){
    var kg = document.getElementById("kg").value;
    var ld = kg*2.2;
    document.getElementById("ld").value = ld;
}

function kilometersToMiles() {
    var km = document.getElementById("km").value;
    var ml = km*0.62137;
    document.getElementById("ml").value=ml;
}
