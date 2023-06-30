// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

var sel = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.querySelector(".randomColors");

sel.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function backgroundColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	sel.textContent = body.style.background + ";";
}

color1.addEventListener("input", backgroundColor);

color2.addEventListener("input", backgroundColor);

randomColor.addEventListener("click", function() {
	var ran1 = Math.floor(Math.random()*16777215).toString(16);
	var ran2 = Math.floor(Math.random()*16777215).toString(16);

	color1.value = "#" + ran1;
	color2.value = "#" + ran2;
	backgroundColor();
});