// Latest Offer cards
let offerCards = [
  {
    header: "20% Off On Tank Tops",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
  },
  {
    header: "Latest Eyewear For You",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
  },
  {
    header: "Let's Lorem Suit Up!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
  },
];

// Selector
const offerContainer = document.querySelector(".offer-container");
const showBtn = document.querySelector(".showBtn");
const hideBtn = document.querySelector(".hideBtn");
const menuber = document.querySelector(".menuber-wrapper");

// Click Event
showBtn.addEventListener("click", showMenuber);
hideBtn.addEventListener("click", hideMenuber);

// Windows Start
window.addEventListener("DOMContentLoaded", displayLatestOffer());

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

function displayLatestOffer() {
  let displayCards = offerCards.map((card) => {
    return `<div class="card">
              <div class="card-content">
                <h5>${card.header}</h5>
                <p>${card.description}</p>
                <button class="btn">SHOP NOW</button>
              </div>
            </div>
            `;
  });
  displayCards = displayCards.join("");
  offerContainer.innerHTML = displayCards;
}
