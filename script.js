$(".feature-items").owlCarousel({
  items: 4,
  loop: true,
  margin: 15,
  autoplay: false,
  smartSpeed: 0,
  dots: true,
  nav: false,
  responsive: {
    0: { items: 1 },
    501: { items: 2 },
    690:{ items: 3 },
    1150: { items: 4 },
  },
});

$(".welcome-cards").owlCarousel({
  items: 3,
  loop: true,
  margin: 20,
  autoplay: false,
  smartSpeed: 0,
  dots: true,
  nav: false,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1101: { items: 3 },
  },
});

$(".promotions-cards").owlCarousel({
  items: 3,
  loop: true,
  margin: 20,
  autoplay: false,
  smartSpeed: 0,
  dots: true,
  nav: false,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    1251: { items: 3 },
  },
});

$(".slide-cards").owlCarousel({
  items: 8,
  loop: true,
  margin: 15,
  autoplay: false,
  smartSpeed: 0,
  dots: true,
  nav: false,
  responsive: {
    0: { items: 2 },
    400: { items: 3 },
    600: { items: 4 },
    800: { items: 5 },
    992: { items: 6 },
    1251: { items: 7 },
    1401: { items: 8 },
  },
});

let toggleBtn = document.querySelector(".toggle-btn");
let menuBox = document.querySelector(".menu-box");
let closeBtn = document.querySelector(".close-btn");
// let tabs = document.querySelectorAll(".tab");

// tabs.forEach((tab) => {   
//   tab.addEventListener('click', () => {
//     tab.classList.toggle("active");
//   })
// })
toggleBtn.addEventListener("click", () => {
  menuBox.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  menuBox.style.transform = "translateX(-100%)";
});

let slotsText = document.querySelector(".play-slots");
let more = document.getElementById("more");
let btnBlock = document.getElementById("btn-wrapper");

more.addEventListener("click", () => {
  slotsText.classList.toggle("active");
  btnBlock.classList.toggle("active");
  if (slotsText.classList.contains("active")) {
    more.textContent = "LESS INFO";
  } else {
    more.textContent = "MORE INFO";
  }
});