const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let fixed = document.querySelector("#fixed-image");
let elemC = document.querySelector("#elem-container");
elemC.addEventListener("mouseenter", () => {
  fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", () => {
  fixed.style.display = "none";
});

let elems = document.querySelectorAll(".elem");
elems.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let image = e.getAttribute("data-image");
    // image.style.objectfit = "cover"
    fixed.style.backgroundImage = `url(${image})`;
  });
});

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
swiperAnimation();

function menuAnimation() {
  let menu = document.querySelector("nav h1");
  let fullScreen = document.querySelector("#full-scr");
  let navImg = document.querySelector("nav img");
  let flag = 0;
  menu.addEventListener("click", () => {
    if (flag == 0) {
      fullScreen.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
    } else {
      fullScreen.style.top = "-100%";
      navImg.style.opacity = 1;
      flag = 0;
    }
  });
}
menuAnimation();

function loaderAnimation() {
  let loader = document.querySelector("#loader");
  setTimeout(() => {
    loader.style.top = "-100%";
  }, 4000);
}

loaderAnimation();
