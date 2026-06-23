//SE NON FUNZIONA PROVA A SPOSTARE FUNZIONE THEMECHANGE QUI!!!!!!!!!

const spookyTheme = document.querySelector("#spooky-theme");
const noEvent = document.querySelector("#no-event");

var thisYear = new Date().getFullYear();
var thisMonth = new Date().getMonth();
var today = new Date().getDate();
var hour = new Date().getHours();
var minute = new Date().getMinutes();
var second = new Date().getSeconds();

var halloween = new Date(thisYear, 9, 31, 0, 0, 0, 0);
var stopHalloween = new Date(thisYear, 10, 3, 0, 0, 0, 0);
var date = new Date(thisYear, thisMonth, today, hour, minute, second);
var halloweenTime = stopHalloween - halloween;
var timeTillHalloween = halloween - today;
var timeTillEndHalloween = stopHalloween - today;

if (timeTillEndHalloween <= 0) {
	//if halloween is over do nothing
} else {
	//if it's not over check if it is
	if (timeTillHalloween <= 0) {
		//sets normal theme things
		selectedBackground = "url(../images/backgrounds/catghost.png)";
		colorT = "hsla(281, 100%, 32%, 0.8)";
		color = "hsla(281, 100%, 32%, 1)";
		profilePic = "https://graphic.neocities.org/halloween_90.gif";
		themeChange(selectedBackground, profilePic, colorT, color);
		//creates extra things to display
		document.querySelector("#buttons").style.display = "none";
		var banner = document.createElement("div");
		banner.className = "topthing";
		document.body.appendChild(banner);
		for (var i = 0; i < 8; i += 1) {
			var blood = document.createElement("img");
			blood.className = "topimg";
			blood.src = "https://graphic.neocities.org/halloween_5.gif";
			banner.appendChild(blood);
		}
		var deco = document.getElementById("events");
		deco.style.display = "block";
		for (var i = 0; i < 1; i += 1) {
			var fence = document.createElement("img");
			fence.className = "eventimg";
			fence.src =
				"https://graphic.neocities.org/tumblr_ltxv5vH6nw1qip80b.gif";
			deco.appendChild(fence);
		}
		document.querySelector("#title").innerHTML = "Trick or treat?";
		//adds halloween option to the menu
		spookyTheme.style.display = "block";
		noEvent.style.display = "none";
	} else {
		spookyTheme.style.display = "none";
		noEvent.style.display = "block";
	}
}
