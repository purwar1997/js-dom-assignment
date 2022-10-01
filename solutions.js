// Assignment 1

const heading = document.querySelector(".side-bar .crayons-card h2");
heading.innerHTML = "Shubham Purwar";

const text = document.querySelector(".side-bar .crayons-card p");
text.innerHTML = "I am passionate about coding and music.";

// Assignment 2

let products = document.querySelectorAll(".as-imagegrid-item-title");
let items = [];

for (let product of products) {
  items.push(product.innerText);
}

for (let i = 0; i < items.length; i++) {
  items[i] = items[i].replace("\nSupport", "");
}

console.log(items);

// Assignment 3

const nav = document.getElementsByClassName("accordion-homepage")[0];

const section = document.createElement("section");
section.className = "parent";

const h3 = document.createElement("h3");
h3.textContent = "My New FAQ";

nav.appendChild(section);
section.appendChild(h3);

// Assignment 4

const contactNo = document.querySelector(".one-tel-number.service-number");
contactNo.innerText = "+91 9897887871";

// Assignment 5

const buttons = document.querySelectorAll(
  ".diwali-deals-product-sale-pro-outer .diwali-deals-product-sale-btn"
);

for (let btn of buttons) {
  btn.innerText = "Check Out";
}

// Assignment 6

const searchBox = document.querySelector(
  ".searchinput-wrapper___3YrvF form input"
);

searchBox.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
  this.style.border = "0px";
});

searchBox.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#ECEFF1";
});

// Assignment 7

function search(searchValue) {
  const input = document.getElementById("top-nav-search-input");
  const searchBtn = document.querySelector(
    ".button.action.has-icon.search-button"
  );

  input.focus();
  input.value = searchValue;
  searchBtn.click();
}

search("CSS Selectors");

// Assignment 8

const parent = document.getElementById("SIvCob");
const languages = document.querySelectorAll("#SIvCob a");

for (let i = 0; i < languages.length; i = i + 2) {
  parent.removeChild(languages[i]);
}

// Assignment 9

const heading = document.querySelector(".display-heading-1");
heading.style.fontFamily = "Monospace";
heading.style.color = "#B1361E";

// Assignment 10

const btn = document.querySelector(
  ".btn-cta-big.btn-block.signup-btn.btn-cta.btn.btn-default .login-btn-text"
);

btn.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
});

btn.addEventListener("mouseout", function () {
  this.style.background = "transparent";
});

// Assignment 11

const logo = document.querySelector(".logo.gtag span");
logo.style.backgroundImage =
  "url('https://ineuron.ai/images/ineuron-logo.png')";

// Assignment 12

const btn = document.querySelector(".col-xl-4.mb-4.mb-xl-0 a");
btn.style.backgroundColor = "darkBlue";

// Assignment 13

const description = document.querySelector(".fl-heading .fl-heading-text");
description.innerHTML = "JS BOOTCAMP";

// Assignment 14

const heading = document.querySelector(".HotDealsAll__Heading__2fIbe");
heading.style.fontSize = "80px";

// Assignment 15

const headers = document.querySelectorAll(".ps-title");

for (let header of headers) {
  if (header.innerText === "G15 Gaming Laptop") {
    header.style.textAlign = "right";
  }
}

// Assignment 16

const header = document.querySelector(".section-title_title__VEDfK");
header.textContent = "Start with Scratch";

// Assignment 17

const btn = document.querySelector(".btn-container");
btn.innerHTML = new Date().toString();

// Assignment 18

const footer = document.querySelector(".p-f03-footer-container");
footer.style.background = "orange";

// Assignment 19

const logo = document.querySelector(".navbar-brand .logo");
console.log(logo.src);

// Assignment 20

const description = document.querySelector(".section-box .desc");
description.style.color = "orange";
