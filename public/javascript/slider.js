const buttons = document.querySelectorAll("[data-slider-button]");
let slides = document.querySelector("[data-slides]");
let offset = 0;

let activeSlide;

let newIndex;

// clearTimeout(timer);
// let timer = setTimeout(() => {});
function pushSlide() {
  activeSlide = slides.querySelector("[data-active]");
  offset = 1;

  newIndex = [...slides.children].indexOf(activeSlide) + offset;

  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) {
    newIndex = 0;
    offset = 0;
  }

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}
let autoSlide = setInterval((pushSlide), 9000);

console.log("test");
// let slides;
// let offset;
// let activeSlide;
// let newIndex;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    offset = button.dataset.sliderButton === "next" ? 1 : -1;
    slides = button.closest("[data-slider]").querySelector("[data-slides]");

    activeSlide = slides.querySelector("[data-active]");
    newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    clearInterval(autoSlide);
    autoSlide = setInterval((pushSlide), 9000);
  });
});
