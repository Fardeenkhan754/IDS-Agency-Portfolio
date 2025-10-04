let navbarToggle = document.getElementById("navbar-toggle");
let navManu = document.getElementById("navbar-manu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("fardeen");
  navManu.classList.toggle("fardeen");
});

// Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const targetId = this.getAttribute("href");
//     const targetElement = document.querySelector(targetId);

//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop - 80,
//         behavior: "smooth",
//       });

//       // Close mobile menu if open
//       if (!navManu.classList.contains("fardeen")) {
//         mobileMenu.classList.add("fardeen");
//       }
//     }
//   });
// });

// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
      // console.log(current);
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

let slides = document.querySelectorAll(".slide");
let totalSlide = document.querySelectorAll(".slide").length;
let curIndex = "";
console.log(totalSlide);

// // setInterval(() => {
//   curIndex = (curIndex + 1) % totalSlide;
//   console.log(curIndex);
//   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
// }, 2000);
