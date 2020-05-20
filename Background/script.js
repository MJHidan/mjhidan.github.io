var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randombtn");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function setGradientWithParamCache() {
    var ranColor1 = randomHexColor();
    var ranColor2 = randomHexColor();
    body.style.background = "linear-gradient(to right, " + ranColor1 + ", " + ranColor2 + ")";
    color1.value = ranColor1;
    color2.value = ranColor2;
    css.textContent = body.style.background + ";";
  }

//Generates a random 6-digit hex color number
function randomHexColor() {
    var hex = Math.floor(Math.random() * 16777216).toString(16);
    while (hex.length < 6) {
      hex = "0" + hex;
    }
    return "#" + hex;
  }

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setGradientWithParamCache)
