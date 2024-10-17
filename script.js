// Write your code here
let count = 0
const lightBulb1 = document.querySelector("#lightbulb1");
const lightBulb2 = document.querySelector("#lightbulb2");
const lightBulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector(".subtitle")

lightBulb1.addEventListener("click", function(){
    count++;
    subtitle.innerHTML = "You've clicked the lights " + count + " times";
    lightBulb1.classList.toggle("active");
});

lightBulb2.addEventListener("click", function(){
    count++;
    subtitle.innerHTML = "You've clicked the lights " + count + " times";
    lightBulb2.classList.toggle("active");
});

lightBulb3.addEventListener("click", function(){
    count++;
    subtitle.innerHTML = "You've clicked the lights " + count + " times";
    lightBulb3.classList.toggle("active");
});