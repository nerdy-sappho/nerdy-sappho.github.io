const searchForm = document.getElementById("searchform");
const cleanSearch = document.getElementById("clean");
const resultsNumber = document.getElementById("results");
let entry = document.getElementsByClassName("entry");
let array = [];

function preSearch(){
    for (i = 0; i < entry.length; i++) {
        array[i] = entry[i].innerHTML.toLowerCase(); 
    }
}

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    let input = document.getElementById("search").value.toLowerCase();
    let n = 0;
    let m = 0;
    
    preSearch();
    
    for (i = 0; i < array.length; i++) {
        n = n + 1;
        if(array[i].includes(input) == true){
            entry[i].style.display = "block";
        } else {
            entry[i].style.display = "none";
            m = m + 1;
        }
    }
    
    let f = n - m;
        
    if(m==n){
        resultsNumber.innerHTML = "no matching results for '" + input + "'";
    } else {
        resultsNumber.innerHTML = f + " matching results for '" + input + "'";
    }
     
});

cleanSearch.addEventListener("click", function(){
    searchForm.reset();
    for (j = 0; j < entry.length; j++) {
        if(entry[j].style.display == "none"){
            entry[j].style.display = "block";
        }
    }
    resultsNumber.innerHTML = "";
});
