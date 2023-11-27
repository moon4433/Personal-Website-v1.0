const portfolioWorkContainer = document.querySelector(
  ".portfolio__work-container"
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
portfolioWork.forEach((work) => {
  work.classList.remove("animated");
});

portfolioSelector.forEach((selector) => {
  const selectorRect = selector.getBoundingClientRect();
  let selection;

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

    if (selection === "Websites") {
      portfolioWork.forEach((work) => {
        if (work.classList.contains("animated")) {
          work.classList.remove("deactive");
          work.classList.remove("animated");
        }
        if (!work.classList.contains("website")) {
          work.classList.add("deactive");
          work.classList.add("animated");
        }
      });
    } else if (selection === "Games") {
      portfolioWork.forEach((work) => {
        if (work.classList.contains("animated")) {
          work.classList.remove("deactive");
          work.classList.remove("animated");
        }
        if (!work.classList.contains("game")) {
          work.classList.add("deactive");
          work.classList.add("animated");
        }
      });
    } else if (selection === "Animations") {
      portfolioWork.forEach((work) => {
        if (work.classList.contains("animated")) {
          work.classList.remove("deactive");
          work.classList.remove("animated");
        }
        if (!work.classList.contains("animation")) {
          work.classList.add("deactive");
          work.classList.add("animated");
        }
      });
    } else {
      portfolioWork.forEach((work) => {
        if (work.classList.contains("animated")) {
          work.classList.remove("deactive");
          work.classList.remove("animated");
        }
      });
    }
  });
});
