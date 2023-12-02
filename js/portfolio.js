const portfolioTitle = document.querySelector(".section__header.portfolio");
const portfolioUnderline = document.querySelector(
  ".section__underline.portfolio"
);

const portfolioWorkContainer = document.querySelector(
  ".portfolio__work-container"
);
const portfolioWorkSelectorBar = document.querySelector(
  ".portfolio__selector-bar"
);

const portfolioWorkColumnWebsites = document.querySelector(
  ".portfolio__work-column.websites"
);
const portfolioWorkColumnGames = document.querySelector(
  ".portfolio__work-column.games"
);
const portfolioWorkColumnAnimations = document.querySelector(
  ".portfolio__work-column.animations"
);
const portfolioSelector = Array.from(
  document.body.querySelectorAll(".portfolio__selector-item")
);
const portfolioWork = Array.from(
  document.body.querySelectorAll(".portfolio__work")
);
const selectorSlider = document.querySelector(".portfolio__selector-slider");

let selection;

portfolioSelector.forEach((selector) => {
  const selectorRect = selector.getBoundingClientRect();

  if (selector.classList.contains("active")) {
    selectorSlider.style.left = selector.offsetLeft + "px";
    selectorSlider.style.width = selectorRect.width + "px";
  }

  selector.addEventListener("click", (event) => {
    portfolioSelector.forEach((items) => {
      if (items.classList.contains("active")) {
        items.classList.remove("active");
      }
    });

    selector.classList.add("active");
    selectorSlider.style.left = selector.offsetLeft + "px";
    selectorSlider.style.width = selectorRect.width + "px";
    selection = selector.textContent;
  });
});

setInterval(() => {
  portfolioSelector.forEach((selector) => {
    const selectorRect = selector.getBoundingClientRect();
    if (selector.classList.contains("active")) {
      selectorSlider.style.left = selector.offsetLeft + "px";
      selectorSlider.style.width = selectorRect.width + "px";
    }
  });
  portfolioWork.forEach((work) => {
    if (selection === "Websites") {
      if (work.classList.contains("animated")) {
        work.classList.remove("deactive");
        work.classList.remove("animated");
      }
      if (!work.classList.contains("website")) {
        work.classList.add("deactive");
        work.classList.add("animated");
      }
    } else if (selection === "Games") {
      if (work.classList.contains("animated")) {
        work.classList.remove("deactive");
        work.classList.remove("animated");
      }
      if (!work.classList.contains("game")) {
        work.classList.add("deactive");
        work.classList.add("animated");
      }
    } else if (selection === "Animations") {
      if (work.classList.contains("animated")) {
        work.classList.remove("deactive");
        work.classList.remove("animated");
      }
      if (!work.classList.contains("animation")) {
        work.classList.add("deactive");
        work.classList.add("animated");
      }
    } else if (selection === "All") {
      if (work.classList.contains("animated")) {
        work.classList.remove("deactive");
        work.classList.remove("animated");
      }
    }
  });
}, 1000 / 3);
