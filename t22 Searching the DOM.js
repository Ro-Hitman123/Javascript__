// Searching the DOM
let cardTitle = document.getElementsByClassName("card-title")[0];
cardTitle.style.color = "blue";
let cardTitle = document.querySelectorAll(".card-title");
cardTitle[0].style.color = "blue";
cardTitle[1].style.color = "red";
cardTitle[2].style.color = "green";
console.log(cardTitle); 
console.log(document.getElementsByTagName("a"));
console.log(document.getElementsByName("a"));