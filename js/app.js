const navbarIcon = document.querySelector(".navbar__icon");
const navbarList = document.querySelector(".navbar__list");
const navbarLink = document.querySelectorAll(".navbar__link");

navbarIcon.addEventListener("click", function () {
  console.log("hello");
  navbarList.classList.toggle("nav__toggle");
});

navbarLink.forEach((link) => {
  link.addEventListener("click", function () {
    navbarList.classList.toggle("nav__toggle");
  });
});
