const navbarWrapper = document.querySelector(".navbar__wrapper");
const navbarSticky = document.getElementById("navbar-sticky");
const aboutSect = document.getElementById("about");
const porfolioSect = document.getElementById("portfolio");
const contactSect = document.getElementById("contact");
const stickyHamburger = document.getElementById("sticky-hamburger");
const hamburger = document.getElementById("hamburger");
const navbarList = navbar.querySelector(".navbar__list");
const stickyNavbarList = navbarSticky.querySelector(".navbar__list");

const stickyHomeBtn = navbarSticky
  .querySelector(".navbar__list")
  .querySelector(".home");
const stickyAboutBtn = navbarSticky
  .querySelector(".navbar__list")
  .querySelector(".about");
const stickyPortfolioBtn = navbarSticky
  .querySelector(".navbar__list")
  .querySelector(".portfolio");
const stickyContactBtn = navbarSticky
  .querySelector(".navbar__list")
  .querySelector(".contact");

const homeBtn = navbar.querySelector(".navbar__list").querySelector(".home");
const aboutBtn = navbar.querySelector(".navbar__list").querySelector(".about");
const portfolioBtn = navbar
  .querySelector(".navbar__list")
  .querySelector(".portfolio");
const contactBtn = navbar
  .querySelector(".navbar__list")
  .querySelector(".contact");

const navbarActiveTab = () => {
  let aboutTrigger = header.offsetHeight + navbar.offsetHeight;

  let portfolioTrigger =
    header.offsetHeight + navbar.offsetHeight + aboutSect.offsetHeight;

  let contactTrigger =
    header.offsetHeight +
    navbar.offsetHeight +
    aboutSect.offsetHeight +
    porfolioSect.offsetHeight;

  if (window.scrollY >= contactTrigger - 10) {
    removeActive();
    stickyContactBtn.classList.add("active");
    contactBtn.classList.add("active");
  } else if (window.scrollY >= portfolioTrigger - 10) {
    removeActive();
    stickyPortfolioBtn.classList.add("active");
    portfolioBtn.classList.add("active");
  } else if (window.scrollY >= aboutTrigger - 5) {
    removeActive();
    stickyAboutBtn.classList.add("active");
    aboutBtn.classList.add("active");
  } else {
    removeActive();
    stickyHomeBtn.classList.add("active");
    homeBtn.classList.add("active");
  }

  function removeActive() {
    navbarSticky
      .querySelector(".navbar__list")
      .querySelector(".active")
      ?.classList.remove("active");
    navbar
      .querySelector(".navbar__list")
      .querySelector(".active")
      ?.classList.remove("active");
  }
};

const stickyNavbarTrigger = () => {
  let triggerHeight = header.offsetHeight + navbar.offsetHeight;
  if (window.scrollY >= triggerHeight) {
    navbarSticky.style.display = "block";
    navbarWrapper.classList.add("active");
  } else if (window.scrollY < triggerHeight - navbar.offsetHeight) {
    navbarSticky.style.display = "none";
    navbarWrapper.classList?.remove("active");
  }
};

const updateNavbar = () => {
  stickyNavbarTrigger();
  navbarActiveTab();
};

const intervalID = setInterval(() => {
  updateNavbar();
}, 1000 / 30);

navbarActiveTab();

window.addEventListener("scroll", (e) => {
  updateNavbar();
});

window.addEventListener("resize", (e) => {});

const mobileNavbarTrigger = () => {
  if (
    navbarList.classList.contains("active") ||
    stickyNavbarList.classList.contains("active")
  ) {
    navbarList.classList.remove("active");
    stickyNavbarList.classList.remove("active");
  } else {
    navbarList.classList.add("active");
    stickyNavbarList.classList.add("active");
  }
};

hamburger.addEventListener("click", () => {
  mobileNavbarTrigger();
});

stickyHamburger.addEventListener("click", () => {
  mobileNavbarTrigger();
});
