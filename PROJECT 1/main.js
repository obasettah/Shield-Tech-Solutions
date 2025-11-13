const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtn.setAttribute("class", isOpen?"ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtn.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption ={
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header-content .section-description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".service-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service-btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about-container .section-header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about-list li", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

ScrollReveal().reveal(".portfolio-container .section-header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".portfolio-container .section-description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".portfolio-image", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});

ScrollReveal().reveal(".portfolio-list li", {
  ...scrollRevealOption,
  interval: 500,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  sliderPreview: 3,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".subscribe-content .section-header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".section-content form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".contact", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-com", {
  ...scrollRevealOption,
  origin: "right",
  delay: 800,
});