# DOM Assignment Solutions

## Assignment 1

### Before DOM manipulation

![before](./images/img1.PNG)

### Code

```javascript
const heading = document.querySelector(".side-bar .crayons-card h2");
heading.innerHTML = "Shubham Purwar";

const text = document.querySelector(".side-bar .crayons-card p");
text.innerHTML = "I am passionate about coding and music.";
```

### After DOM manipulation

![after](./images/img2.PNG)

---

## Assignment 2

### Product names to be fetched

![apple](./images/img3.PNG)

### Code

```javascript
let products = document.querySelectorAll(".as-imagegrid-item-title");
let items = [];

for (let product of products) {
  items.push(product.innerText);
}

for (let i = 0; i < items.length; i++) {
  items[i] = items[i].replace("\nSupport", "");
}

console.log(items);
```

### Output

![output](./images/img38.PNG)

---

## Assignment 3

### Before DOM manipulation

![before](./images/img4.PNG)

### Code

```javascript
const nav = document.getElementsByClassName("accordion-homepage")[0];

const section = document.createElement("section");
section.className = "parent";

const h3 = document.createElement("h3");
h3.textContent = "My New FAQ";

nav.appendChild(section);
section.appendChild(h3);
```

### After DOM manipulation

![after](./images/img5.PNG)

---

## Assignment 4

### Before DOM manipulation

![before](./images/img6.PNG)

### Code

```javascript
const contactNo = document.querySelector(".one-tel-number.service-number");
contactNo.innerText = "+91 9897887871";
```

### After DOM manipulation

![after](./images/img7.PNG)

---

## Assignment 5

### Before DOM manipulation

![before](./images/img8.PNG)

### Code

```javascript
const buttons = document.querySelectorAll(
  ".diwali-deals-product-sale-pro-outer .diwali-deals-product-sale-btn"
);

for (let btn of buttons) {
  btn.innerText = "Check Out";
}
```

### After DOM manipulation

![after](./images/img9.PNG)

---

## Assignment 6

### Before DOM manipulation

![before](./images/img10.PNG)

### Code

```javascript
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
```

### After DOM manipulation

![after](./images/img39.PNG)

---

## Assignment 7

### Before DOM manipulation

![before](./images/img33.png)

### Code

```javascript
function search(searchValue) {
  const input = document.getElementById("top-nav-search-input");
  const searchBtn = document.querySelector(
    ".button.action.has-icon.search-button"
  );

  input.focus();
  input.value = searchValue;
  searchBtn.click();
}

search("CSS Positions");
```

### After DOM manipulation

![after](./images/img40.png)

---

## Assignment 8

### Before DOM manipulation

![before](./images/img11.PNG)

### Code

```javascript
const parent = document.getElementById("SIvCob");
const languages = document.querySelectorAll("#SIvCob a");

for (let i = 0; i < languages.length; i = i + 2) {
  parent.removeChild(languages[i]);
}
```

### After DOM manipulation

![after](./images/img12.PNG)

---

## Assignment 9

### Before DOM manipulation

![before](./images/img13.PNG)

### Code

```javascript
const heading = document.querySelector(".display-heading-1");
heading.style.fontFamily = "Monospace";
heading.style.color = "#B1361E";
```

### After DOM manipulation

![after](./images/img14.PNG)

---

## Assignment 10

### Before DOM manipulation

![before](./images/img15.PNG)

### Code

```javascript
const btn = document.querySelector(
  ".btn-cta-big.btn-block.signup-btn.btn-cta.btn.btn-default .login-btn-text"
);

btn.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
});

btn.addEventListener("mouseout", function () {
  this.style.background = "transparent";
});
```

### After DOM manipulation

![after](./images/img16.PNG)

---

## Assignment 11

### Before DOM manipulation

![before](./images/img17.PNG)

### Code

```javascript
const logo = document.querySelector(".logo.gtag span");
logo.style.backgroundImage =
  "url('https://ineuron.ai/images/ineuron-logo.png')";
```

### After DOM manipulation

![after](./images/img18.PNG)

---

## Assignment 12

### Before DOM manipulation

![before](./images/img19.PNG)

### Code

```javascript
const btn = document.querySelector(".col-xl-4.mb-4.mb-xl-0 a");
btn.style.backgroundColor = "darkBlue";
```

### After DOM manipulation

![after](./images/img20.PNG)

---

## Assignment 13

### Before DOM manipulation

![before](./images/img21.PNG)

### Code

```javascript
const description = document.querySelector(".fl-heading .fl-heading-text");
description.innerHTML = "JS BOOTCAMP";
```

### After DOM manipulation

![after](./images/img22.PNG)

---

## Assignment 14

### Before DOM manipulation

![before](./images/img23.PNG)

### Code

```javascript
const heading = document.querySelector(".HotDealsAll__Heading__2fIbe");
heading.style.fontSize = "80px";
```

### After DOM manipulation

![after](./images/img24.PNG)

---

## Assignment 15

### Before DOM manipulation

![before](./images/img25.PNG)

### Code

```javascript
const headers = document.querySelectorAll(".ps-title");

for (let header of headers) {
  if (header.innerText === "G15 Gaming Laptop") {
    header.style.textAlign = "right";
  }
}
```

### After DOM manipulation

![after](./images/img26.PNG)

---

## Assignment 16

### Before DOM manipulation

![before](./images/img27.PNG)

### Code

```javascript
const header = document.querySelector(".section-title_title__VEDfK");
header.textContent = "Start with Scratch";
```

### After DOM manipulation

![after](./images/img28.PNG)

---

## Assignment 17

### Before DOM manipulation

![before](./images/img29.PNG)

### Code

```javascript
const btn = document.querySelector(".btn-container");
btn.innerHTML = new Date().toString();
```

### After DOM manipulation

![after](./images/img30.PNG)

---

## Assignment 18

### Before DOM manipulation

![before](./images/img31.PNG)

### Code

```javascript
const footer = document.querySelector(".p-f03-footer-container");
footer.style.background = "orange";
```

### After DOM manipulation

![after](./images/img32.PNG)

---

## Assignment 19

### Logo to be fetched

![before](./images/img34.PNG)

### Code

```javascript
const logo = document.querySelector(".navbar-brand .logo");
console.log(logo.src);
```

### Output

![after](./images/img35.PNG)

---

## Assignment 20

### Before DOM manipulation

![before](./images/img36.PNG)

### Code

```javascript
const description = document.querySelector(".section-box .desc");
description.style.color = "orange";
```

### After DOM manipulation

![after](./images/img37.PNG)
