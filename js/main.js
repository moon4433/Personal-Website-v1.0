window.addEventListener("scroll", () => {
  let aboutTitleHeight = document
    .querySelector(".about-title-height")
    .getBoundingClientRect();
  let aboutUnderlineHeight = document
    .querySelector(".about-underline-height")
    .getBoundingClientRect();
  let aboutBulletsHeight = document
    .querySelector(".about-bullet-height")
    .getBoundingClientRect();
  let aboutBulletsDescHeight = document
    .querySelector(".about-desc-height")
    .getBoundingClientRect();
  let aboutBioHeight = document
    .querySelector(".about-bio-height")
    .getBoundingClientRect();

  let portTitleHeight = document
    .querySelector(".port-title-height")
    .getBoundingClientRect();

  let portUnderlineHeight = document
    .querySelector(".port-underline-height")
    .getBoundingClientRect();

  let portSliderHeight = document
    .querySelector(".port-slider-height")
    .getBoundingClientRect();

  let portWorkHeight = document
    .querySelector(".port-work-height")
    .getBoundingClientRect();

  let contactTitleHeight = document
    .querySelector(".contact-title-height")
    .getBoundingClientRect();

  let contactUnderlineHeight = document
    .querySelector(".contact-underline-height")
    .getBoundingClientRect();

  let contactNoteHeight = document
    .querySelector(".contact-note-height")
    .getBoundingClientRect();

  let contactFormHeight = document
    .querySelector(".contact-form-height")
    .getBoundingClientRect();

  if (aboutTitleHeight.top <= 0) {
    aboutTitle.classList.remove("start");
  }
  if (aboutUnderlineHeight.top <= 0) {
    aboutUnderline.classList.remove("start");
  }
  if (aboutBulletsHeight.top <= 0) {
    aboutBullets.forEach((bullet) => {
      bullet.classList.remove("start");
    });
  }
  if (aboutBulletsDescHeight.top <= 0) {
    aboutBulletsDesc.forEach((desc) => {
      desc.classList.remove("start");
    });
  }
  if (aboutBioHeight.top <= 0) {
    skillsBar.classList.remove("start");
    aboutBio.classList.remove("start");
    skillsFillBar.forEach((bar) => {
      bar.classList.remove("start");
    });
  }
  if (portTitleHeight.top <= 0) {
    portfolioTitle.classList.remove("start");
  }
  if (portUnderlineHeight.top <= 0) {
    portfolioUnderline.classList.remove("start");
  }
  if (portSliderHeight.top <= 0) {
    portfolioWorkSelectorBar.classList.remove("start");
    selectorSlider.classList.remove("start");
  }
  if (portWorkHeight.top <= 0) {
    portfolioWork.forEach((work) => {
      work.classList.remove("animated");
    });
  }
  if (contactTitleHeight.top <= 0) {
    contactTitle.classList.remove("start");
  }
  if (contactUnderlineHeight.top <= 0) {
    contactUnderline.classList.remove("start");
  }
  if (contactNoteHeight.top <= 0) {
    contactNote.classList.remove("start");
  }
  if (contactFormHeight.top <= 0) {
    contactFormName.classList.remove("start");
    contactFormEmail.classList.remove("start");
    contactFormMessage.classList.remove("start");
    contactFormBtn.classList.remove("start");
  }
});
