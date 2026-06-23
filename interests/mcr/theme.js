//SELECTING PAGE ELEMENTS
let color= document.querySelector("body");
let buttons = document.querySelector(".button");
let pageDoll = document.querySelector("#pagedoll");
let dollContainer = document.querySelector("#doll-container");
let titles = document.querySelector("h2");
let links = document.querySelector("a");

//SELECTING NAVIGATION BUTTONS
const home = document.querySelector("#home");
const members = document.querySelector("#members");
const albums = document.querySelector("#albums");
const quotes = document.querySelector("#quotes");
const images = document.querySelector("#images");
const videos = document.querySelector("#videos");

//SELECTING THEME BUTTONS
const bulletsButton = document.querySelector("#bulletsButton");
const revengeButton = document.querySelector("#revengeButton");
const paradeButton = document.querySelector("#paradeButton");
const dangerButton = document.querySelector("#dangerButton");

//SELECTING IFRAME
const iFrame = document.querySelector("#iframe");

//EVENT LISTENERS
bulletsButton.addEventListener("click", () => {
  document.documentElement.style.setProperty('--accent', '#8b0001');
  color.style = "background-color: #fcba03";
  iFrame.style = "filter:grayscale(0%);";
  pageDoll.src = " ";
});

revengeButton.addEventListener("click", () => {
  document.documentElement.style.setProperty('--accent', '#8b0001');
  color.style = "background-image:url(../../images/backgrounds/fence.gif)";
  iFrame.style = "filter:grayscale(0%);";
  pageDoll.src = "images/demolitionlovers.png";
  dollContainer.style = "bottom:25px; right:25px; z-index:3;";
});

paradeButton.addEventListener("click", () => {
  document.documentElement.style.setProperty('--accent', '#000000');
  color.style = "background-image:url(../../images/backgrounds/graybat.png);";
  iFrame.style = "filter:grayscale(100%);";
  pageDoll.src = "images/tbp-pepe.png";
  dollContainer.style = "bottom:0px; right:25px; z-index:3;";
});

//EVENT LISTENERS
home.addEventListener("click", () => {
  iFrame.src="home.html";
});
members.addEventListener("click", () => {
  iFrame.src=" ";
});
albums.addEventListener("click", () => {
  iFrame.src=" ";
});
quotes.addEventListener("click", () => {
  iFrame.src=" ";
});
images.addEventListener("click", () => {
  iFrame.src=" ";
});
videos.addEventListener("click", () => {
  iFrame.src=" ";
});








