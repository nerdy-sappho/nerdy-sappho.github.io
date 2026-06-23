const select = document.querySelector(" #select-font");
const body = document.querySelector("body");

select.addEventListener("change", (event) => {
	if (event.target.value == "legible") {
        body.style.fontFamily = "LegibleFont";
    }
    else if (event.target.value == "dyslexic") {
        body.style.fontFamily = "OpenDyslexic";
    }
    else if (event.target.value == "comicsans") {
        body.style.fontFamily = "cursive";
    }
    else if (event.target.value == "monospace") {
        body.style.fontFamily = "monospace";
    }
});