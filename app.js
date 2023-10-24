// Selector
const showBtn = document.querySelector(".showBtn");
const hideBtn = document.querySelector(".hideBtn");
const menuber = document.querySelector(".menuber-wrapper");

// Click Event
showBtn.addEventListener("click", showMenuber);
hideBtn.addEventListener("click", hideMenuber);



/*
===========
Functions
===========
*/ 

// Show Hide Menuber Function
function showMenuber() {
    menuber.classList.add("show-menuber");
}
// Hide MenuBer
function hideMenuber() {
    menuber.classList.remove("show-menuber");
}