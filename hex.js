const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

// #f2f233
btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor = hexColor + hex[getRandomNumber()];  
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
}) 

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

/* 
const niz = [1,2,3,4,5,6,7,8,9]; 
let sum = 0;
// struktura for petlje
for(let i = 1; i < 10; i++) {
    sum = sum + i;
}*/