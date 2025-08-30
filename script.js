// nav bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// single product galery
let MainImg = document.getElementById("MainImg");
let smallimg = document.querySelectorAll(".small-img");

smallimg.forEach((img) => {
  img.addEventListener("click", () => {
    MainImg.src = img.src;
  });
});

// cart

const addToCartBtn = document.querySelector(".single-pro-details button");
const productImg = document.getElementById("MainImg");
const productTitle = document.querySelector(".single-pro-details h4");
const productQty = document.querySelector(
  ".single-pro-details input[type='number']"
);
const productPrice = document.querySelector(".single-pro-details h2");

addToCartBtn.addEventListener("click", () => {
  const item = {
    title: productTitle.innerText,
    image: productImg.src,
    quantity: parseInt(productQty.value),
    price: productPrice.innerText,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = true;
  if (existing) {
    existing.quantity += item.quantity;
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("product aded !");
});
