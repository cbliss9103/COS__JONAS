"use strict";
// 1
// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log("navbarHeight: ${navbarHeight}");

  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__dark");
  } else {
    navbar.classList.remove("navbar__dark");
  }
});

// 2
// scroll to section
// Handle scrolling when tapping on the navbar menu
// for example) <div class="navbar__menu">
// event.target은 .navbar__menu에서 내가 클릭한 요소를 나타냄
// for example) navbar__menu를 클릭하면 event.target은 <div class="navbar__menu">가 된다
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  // 3
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoView(link);
  // navbarMenu.classList.remove("open");
});

// 4
// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", (event) => {
  // const scrollTo = document.querySelector("#contact");
  // scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoView("#contact");
});

// 5
// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1.5 - window.scrollY / homeHeight;
});

// 6
// scroll "arrow up" when scrolling
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visiable");
  } else {
    arrowUp.classList.remove("visiable");
  }
});

// 7
// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
const navbarMenuItems = document.querySelector(".navbar__menu__items")
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
  navbarMenuItems.classList.toggle("open")
});

// 8
// Handle click on the 'arrow up' button
arrowUp.addEventListener("click", (event) => {
  scrollIntoView("#home");
});

// 9
// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // 10
  // Remove selection from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  console.log(filter);
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
