let storiesEL = document.querySelector(".stories");
let storyLeftEl = document.querySelector(".story-left");
let storyRightEl = document.querySelector(".story-right");

storyLeftEl.addEventListener("click", () => {
  storiesEL.scrollTo({
    left: storiesEL.scrollLeft - 150,
    behavior: "smooth",
  });
});
storyRightEl.addEventListener("click", () => {
  storiesEL.scrollTo({
    left: storiesEL.scrollLeft + 150,
    behavior: "smooth",
  });
});
