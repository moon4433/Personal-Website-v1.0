const aboutTitle = document.querySelector(".section__header.about");
const aboutUnderline = document.querySelector(".section__underline.about");
const skillsFillBar = Array.from(document.querySelectorAll(".skill-bar__fill"));
const skillsBar = document.querySelector(".container.skill-bar");
const aboutBio = document.querySelector(".about-bio");
const aboutBullets = Array.from(
  document.querySelectorAll(".about-bullets__image-container")
);
const aboutBulletsDesc = Array.from(
  document.querySelectorAll(".about-bullets__bottom")
);

aboutTitle.classList.remove("start");
aboutUnderline.classList.remove("start");
skillsBar.classList.remove("start");
aboutBio.classList.remove("start");
aboutBullets.forEach((bullet) => {
  bullet.classList.remove("start");
});
aboutBulletsDesc.forEach((desc) => {
  desc.classList.remove("start");
});
skillsFillBar.forEach((bar) => {
  bar.classList.remove("start");
});
