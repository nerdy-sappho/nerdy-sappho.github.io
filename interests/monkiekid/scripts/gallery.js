const body = document.querySelector("body");
const myImg = document.querySelectorAll(".myImg");
const gallery = document.querySelector("#gallery");
const links = document.querySelectorAll("a");
const theScript = document.querySelector("#script");
const noJs = document.querySelector(".no-js");

//LISTA IMMAGINI E ATTRIBUTI
var imgList = {
	"images":[
		{
			"url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2024/banner-title-blue.png",
			"thumbnail_url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2024/banner-title-blue.png",
			"alt":"orizontal aqua banner with the traffic light trio hugging",
			"caption":"Dec 24 - The banner I made for this website!",
		},
		{
			"url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2024/banner-title-prova.png",
			"thumbnail_url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2024/banner-title-prova.png",
			"alt":"orizontal blue and green banner with the traffic light trio hugging",
			"caption":"Dec 24 - Alternate version of the banner.",
		},
		{
			"url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2024/clouds-banner-big.png",
			"thumbnail_url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2024/clouds-banner-big.png",
			"alt":"blue banner with decorative orange cloud pattern",
			"caption":"Dec 24 - Clouds deco thinghy...you could still call it a banner lol. I procrastinated on this one for so long.",
		},
		{
			"url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2024/red-son.png",
			"thumbnail_url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2024/thumbnails/red-son.png",
			"alt":"...",
			"caption":"Feb 24 - I love drawing Red son so much! I hope to add the traditional doodles I made of him too.",
		},
		{
			"url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/nezha!!!.png",
			"thumbnail_url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/thumbnails/nezha!!.png",
			"alt":"...",
			"caption":"...",
		},
		{
			"url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/prova1.jpg",
			"thumbnail_url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/thumbnails/prova%201.jpeg",
			"alt":"...",
			"caption":"...",
		},
		{
			"url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/is%20that%20vine.png",
			"thumbnail_url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/thumbnails/is%20that%20vine.png",
			"alt":"...",
			"caption":"...",
		},
		{
			"url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/sandy-wip.png",
			"thumbnail_url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/thumbnails/sandy%20wip.png",
			"alt":"...",
			"caption":"...",
		},
		{
			"url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/sandy%20boat.jpg",
			"thumbnail_url":"https://file.garden/ZrOKAUb_lR-IK9dq/art/2023/thumbnails/sandy%20boat.jpeg",
			"alt":"...",
			"caption":"...",
		}
		/*{
			"url":"",
			"thumbnail_url":"",
			"caption":"...",
		},*/
	]
};

JSON.stringify(imgList);

//DISATTIVA COSE CHE SERVONO IN CASO NON C'è JS
noJs.style.display = "none";
noJs.setAttribute("aria-hidden", "true");

//METTI IMMAGINI NELLA TABELLA
for(let i=0; i<myImg.length; i++){
	let imgNumber = myImg[i].dataset.indexNumber;
	myImg[i].src = imgList.images[i].thumbnail_url;
	myImg[i].setAttribute("alt", imgList.images[i].alt);
}

//DISATTIVA IL RESTO DELLA PAGINA QUANDO C'è POPUP
function disable(){
	
	body.style.overflow = "hidden";
	body.setAttribute("aria-hidden", "true");
	
	const tab = document.querySelectorAll("[tabindex='0']");
	for(i=0; i<tab.length; i++){
		tab[i].setAttribute("tabindex", "-1");
	}
	for(i=0; i<links.length; i++){
		links[i].setAttribute("tabindex", "-1");
	}
}
//RIATTIVA IL RESTO DELLA PAGINA QUANDO SI TOGLIE POPUP
function able(){
	
	body.style.overflow = "scroll";
	body.removeAttribute("aria-hidden");
	
	const tab = document.querySelectorAll("[tabindex='-1']");
	for(i=0; i<tab.length; i++){
		tab[i].setAttribute("tabindex", "0");
	}
	for(i=0; i<links.length; i++){
		links[i].setAttribute("tabindex", "0");
	}
}

//FUNZIONE PER X (CHIUDI POPUP)
function activateX(div, closeBtn){
	//CLICK MOUSE
	closeBtn.addEventListener("click", event => {
		div.remove();
		able();
	});
	//CLICK TASTIERA VERSIONE A
	closeBtn.addEventListener("keydown", event => {
		if (event.keyCode === 13){
			div.remove();
			able();
		}
	});
	//CLICK TASTIERA VERSIONE B
	closeBtn.addEventListener("keypress", event => {
		if (event.keyCode === 13){
			div.remove();
			able();
		}
	});
}


//APRI (CREA) POPUP
function open(clicked){
	
	const div = document.createElement("div");
	body.appendChild(div);
	theScript.parentNode.insertBefore(div, theScript);
	div.setAttribute("id", "img-display");
	//div = document.querySelector("#img-display");
	
	const closeBtn = document.createElement("div");
	div.appendChild(closeBtn);
	closeBtn.setAttribute("class", "close");
	//closeBtn = document.querySelector(".close");
	
	const icon = document.createElement("i");
	closeBtn.appendChild(icon);
	icon.setAttribute("class", "fa fa-close");
	icon.setAttribute("aria-label", "close");
	icon.setAttribute("tabindex", "0");
	
	const image = document.createElement("img");
	div.appendChild(image);
	image.src = imgList.images[clicked].url;
	image.alt = imgList.images[clicked].alt;
	
	const caption = document.createElement("div");
	div.appendChild(caption);
	caption.setAttribute("id", "caption");
	caption.innerText = imgList.images[clicked].caption;
	
	activateX(div, closeBtn);
}


gallery.addEventListener('click', event => {
    if (event.target.className === 'myImg') { 
    	let clicked = event.target.dataset.indexNumber;
    	disable();
    	open(clicked);
    }
});

/*const div = document.querySelector("#img-display");*/
//const closeBtn = document.querySelector(".close");


/*casella.onclick = function(e){
	test.innerText ="holy shit";
};

myImg.onkeydown = function(e){
	open();
};*/



