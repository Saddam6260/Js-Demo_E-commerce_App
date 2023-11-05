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

let products = [
  {
    img: "./images/Product-img/sports-shoe3.jpg",
    productName: "DNK Yellow Shoes",
    price: "$120",
  },
  {
    img: "./images/Product-img/sports-shoe1-300x300.jpg",
    productName: "DNK Blue Shoes",
    price: "$240",
  },
  {
    img: "./images/Product-img/product-m-jeans1-300x300.jpg",
    productName: "Dark Browns Jeans",
    price: "$150",
  },
  {
    img: "./images/Product-img/product-w-jeans2-300x300.jpg",
    productName: "Blue Denim Jeans",
    price: "$150",
  },
  {
    img: "./images/Product-img/product-w-jeans4-300x300.jpg",
    productName: "Basic Gray Jeans",
    price: "$150",
  },
  {
    img: "./images/Product-img/product-w-jeans1-300x300.jpg", 
    productName: "Blue Denim Shorts", 
    price: "$130"
  }
  {
    img: "./images/Product-img/product-accessory1-300x300.jpg",
    productName: "Anchor Bracelet",
    price: "$180",
  },
  {
    img: "./images/Product-img/product-accessory2-300x300.jpg",
    productName: "Boho Bangle Bracelet",
    price: "$170",
  },
  {
    img: "./images/Product-img/product-bag1-300x300.jpg",
    productName: "Light Brown Purse",
    price: "$150",
  },
  {
    img: "./images/Product-img/product-bag3-300x300.jpg",
    productName: "Bright Red Bag",
    price: "$140",
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
                <h3 class="common-h3">${card.header}</h5>
                <p class="common-pera">${card.description}</p>
                <button class="btn"><a href="">SHOP NOW</a></button>
              </div>
            </div>
            `;
  });
  displayCards = displayCards.join("");
  offerContainer.innerHTML = displayCards;
}
