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
        c = g / 48.4444445;
        a = c / 100;
        gun = a * 40;
        s = g * 9;
        if (!Number.isInteger(c)) c = c.toFixed(3);
        if (!Number.isInteger(a)) a = a.toFixed(3);
        if (!Number.isInteger(gun)) gun = gun.toFixed(3);
        if (!Number.isInteger(s)) s = s.toFixed(3);
        cent.value = c;
        gunta.value = gun;
        acre.value = a;
        sft.value = s;
    }
    else {
        cent.value = "";
        gunta.value = "";
        acre.value = "";
        sft.value = "";
    }
});

cent.addEventListener("input", function () {
    if (this.value != "") {
        c = this.value;
        g = c * 48.4444445;
        a = c / 100;
        gun = a * 40;
        s = g * 9;
        if (!Number.isInteger(g)) g = g.toFixed(3);
        if (!Number.isInteger(a)) a = a.toFixed(3);
        if (!Number.isInteger(gun)) gun = gun.toFixed(3);
        if (!Number.isInteger(s)) s = s.toFixed(3);

        gunta.value = gun;
        acre.value = a;
        sft.value = s;
        gaj.value = g;
    }
    else {
        gaj.value = "";
        gunta.value = "";
        acre.value = "";
        sft.value = "";
    }
});

gunta.addEventListener("input", function () {
    if (this.value != "") {
        gun = this.value;
        a = gun / 40;
        c = a * 100;
        g = c * 48.4444445;
        s = g * 9;
        if (!Number.isInteger(g)) g = g.toFixed(3);
        if (!Number.isInteger(a)) a = a.toFixed(3);
        if (!Number.isInteger(c)) c = c.toFixed(3);
        if (!Number.isInteger(s)) s = s.toFixed(3);

        cent.value = c;
        acre.value = a;
        sft.value = s;
        gaj.value = g;
    }
    else {
        cent.value = "";
        gaj.value = "";
        acre.value = "";
        sft.value = "";
    }
});

acre.addEventListener("input", function () {
    if (this.value != "") {
        a = this.value;
        c = a * 100;
        g = c * 48.4444445;
        gun = a * 40;
        s = g * 9;
        if (!Number.isInteger(g)) g = g.toFixed(3);
        if (!Number.isInteger(gun)) gun = gun.toFixed(3);
        if (!Number.isInteger(c)) c = c.toFixed(3);
        if (!Number.isInteger(s)) s = s.toFixed(3);

        cent.value = c;
        sft.value = s;
        gunta.value = gun;
        gaj.value = g;
    }
    else {
        cent.value = "";
        gaj.value = "";
        gunta.value = "";
        sft.value = "";
    }
});

sft.addEventListener("input", function () {
    if (this.value != "") {
        s = this.value;
        g = s / 9;
        c = g / 48.4444445;
        a = c / 100;
        gun = a * 40;
        if (!Number.isInteger(g)) g = g.toFixed(3);
        if (!Number.isInteger(gun)) gun = gun.toFixed(3);
        if (!Number.isInteger(c)) c = c.toFixed(3);
        if (!Number.isInteger(a)) a = a.toFixed(3);

        gaj.value = g;
        gunta.value = gun;
        cent.value = c;
        acre.value = a;
    }
    else {
        gaj.value = "";
        gunta.value = "";
        cent.value = "";
        acre.value = "";
    }
});

var nameText = document.getElementById("nameText");
var nameTextEng = document.getElementById("nameTextEng");

nameText.addEventListener("click", function () {
    nameText.innerHTML = "😉";
});

nameTextEng.addEventListener("click", function () {
    nameText.innerHTML = "😉";
});