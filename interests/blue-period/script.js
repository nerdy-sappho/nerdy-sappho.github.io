const dialog = document.querySelector("dialog");

document.addEventListener("DOMContentLoaded", (event)=>{
    dialog.showModal();
});

function closePopup(){
    dialog.close();
}