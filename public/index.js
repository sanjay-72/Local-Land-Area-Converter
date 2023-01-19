var gaj = document.getElementById("sqY");
var cent = document.getElementById("apStyle");
var gunta = document.getElementById("tsStyle");
var acre = document.getElementById("acreS");
var sft = document.getElementById("sFt");
let g, c, gun, a, s;
function setAllValues() {
    cent.value = c;
    gunta.value = gun;
    acre.value = a;
    sft.value = s;
    gaj.value = g;
}

gaj.addEventListener("input", function () {
    if (this.value != "") {
        g = this.value;
        c = g / 48.4;
        a = c / 100;
        gun = a * 40;
        s = g * 9;
        if (!Number.isInteger(c)) c = c.toFixed(5);
        if (!Number.isInteger(a)) a = a.toFixed(5);
        if (!Number.isInteger(gun)) gun = gun.toFixed(5);
        if (!Number.isInteger(s)) s = s.toFixed(5);
        setAllValues();
    }
    else {
        cent.value = "";
        gunta.value = "";
        acre.value = "";
        sft.value = "";
    }
});