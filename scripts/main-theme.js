const selectElement = document.querySelector(".theme");

if (
	(!localStorage.getItem("background"),
	!localStorage.getItem("colorT"),
	!localStorage.getItem("color"))
) {
	//leave empty
} else {
	const background = localStorage.getItem("background");
	const colorT = localStorage.getItem("colorT");
	const color = localStorage.getItem("color");
	const profilePic = localStorage.getItem("image");
	document.querySelector("body").style.backgroundImage = background;
	document.documentElement.style.setProperty("--maincolor-t", colorT);
	document.documentElement.style.setProperty("--maincolor", colorT);
	document.querySelector("#pfp").src = profilePic;
}

let selectedBackground;
let profilePic;
let colorT;
let color;

function themeChange(selectedBackground, profilePic, colorT, color) {
	localStorage.setItem("background", selectedBackground);
	localStorage.setItem("colorT", colorT);
	localStorage.setItem("color", color);
	localStorage.setItem("image", profilePic);

	document.querySelector("body").style.background = selectedBackground;
	document.querySelector("#pfp").src = profilePic;
	document.documentElement.style.setProperty("--maincolor-t", colorT);
	document.documentElement.style.setProperty("--maincolor", color);
}


selectElement.addEventListener("change", (event) => {
	if (event.target.value == "original") {
		selectedBackground = "url(../images/backgrounds/babypink.gif)";
		colorT = "hsla(4, 73%, 40%, 0.8)";
		color = "hsla(4, 73%, 40%, 1)";
		profilePic = "../images/redson-homepage-slow.gif";
		themeChange(selectedBackground, profilePic, colorT, color);
	} 
	
	else if (event.target.value == "lapis") {
		selectedBackground = "url(../images/backgrounds/water-tile.gif)";
		colorT = "hsla(212, 40%, 31%, 0.8)";
		color = "hsla(212, 40%, 31%, 1)";
		profilePic = "https://file.garden/ZrOKAUb_lR-IK9dq/profile/lapis-baseball.jpg";
		themeChange(selectedBackground, profilePic, colorT, color);
	} 
	
	else if (event.target.value == "ryuzaki") {
		selectedBackground = "url(../images/backgrounds/cakes.jpg)";
		colorT = "hsla(4, 73%, 0%, 0.8)";
		color = "hsla(4, 73%, 0%, 1)";
		profilePic = "../images/ryuzaki-1.jpg";
		themeChange(selectedBackground, profilePic, colorT, color);
	}
	
	else if (event.target.value == "halloween") {
		selectedBackground = "url(../images/backgrounds/catghost.png)";
		colorT = "hsla(281, 100%, 32%, 0.8)";
		color = "hsla(281, 100%, 32%, 1)";
		profilePic = "https://graphic.neocities.org/halloween_90.gif";
		themeChange(selectedBackground, profilePic, colorT, color);
	}
	
	else if (event.target.value == "test") {
		selectedBackground = "url(../images/backgrounds/babypink.gif)";
		colorT = "hsla(4, 73%, 40%, 0.8)";
		color = "hsla(4, 73%, 40%, 1)";
		profilePic = "../images/redson-homepage-slow.gif";
		themeChange(selectedBackground, profilePic, colorT, color);
	} 
});
