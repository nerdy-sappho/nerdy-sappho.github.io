//fetch(url, {options});
/*
fetch(url, {method: "GET"}); get data, the default (you don't have to specify)
fetch(url, {method: "POST"}); send data
fetch(url, {method: "PUT"}); replace data
fetch(url, {method: "DELETE"}); delete data
*/ 

//here we'll focus on getting data

/*fetch("stuff.json")
    .then(response => {
    	if(!response.ok){
    		throw new Error("Error occurred. Try again");
    	}
    	return response.json();
    })
    .then(data => console.log(data[0].name))
    .catch(error => console.error(error));*/
    
var post = [
    {
        "title": "Odysseus",
        "date": 250102,
        "url": "../240817.html",
        "tags": ["ancient greece", "musicals"],
        "desc": "peace and love on planet fucking olympus "
    },
    {
        "title": "example",
        "date": 240819,
        "url": "../250102.html",
        "tags": ["art", "existential crisis"],
        "desc": "aaaaaaaaaaaaaaa"
    }
];

JSON.stringify(post);
    
const postList = document.querySelector("#postList");
const latestSpan = document.querySelector("#latest");

function findNewest(){
	let lastNum = 0;
	for(let j = 1; j < post.length; j++){
        if (post[j].date > post[j-1].date){
            lastNum = j;
        }
	}
	return lastNum;
}

function printPostPreview(postDiv, i){
    
    let link = document.createElement("a");
    postDiv.appendChild(link);
    link.innerHTML = post[i].title;
    link.src = post[i].url;
    
    let desc = document.createElement("div");
    postDiv.appendChild(desc);
    desc.innerHTML = post[i].desc;
}

let postDiv;
for(let i = 0; i<post.length; i++){
	let listElement = document.createElement("li");
    postList.appendChild(listElement);
    listElement.setAttribute("class", "list-element");
    postDiv = listElement;
	printPostPreview(postDiv, i);
}

//postDiv = latestSpan;
//printPostPreview(postDiv, findNewest());
latestSpan.src = post[findNewest()].url;







