const buttons = document.querySelectorAll("[data-slider-button]");
let slides = document.querySelector("[data-slides]");
let offset = 0;

let activeSlide;
let slideActive = true;
let newIndex;

let timer;

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
let autoSlide = setInterval(pushSlide, 9000);

buttons.forEach((button) => {
  let click = 0;
  button.setAttribute("parameter", "button");
  button.addEventListener("click", nextSlide);

  function nextSlide() {
    click++;
    console.log(button);
    offset = button.dataset.sliderButton === "next" ? 1 : -1;
    slides = button.closest("[data-slider]").querySelector("[data-slides]");

    activeSlide = slides.querySelector("[data-active]");
    newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    clearInterval(autoSlide);

    autoSlide = setInterval(pushSlide, 9000);

    if (click > 0) button.removeEventListener("click", nextSlide);

    timerDelay();
  }

  function timerDelay() {
    button.removeEventListener("click", nextSlide);
    let startDate = Date.now();
    let currentDate;

    const topMargin = 2120;
    const bottomMargin = 2090;
    setInterval(() => {
      currentDate = Date.now();
      if (
        currentDate - startDate <= topMargin &&
        currentDate - startDate >= bottomMargin
      ) {
        // it was a second
    
        button.addEventListener("click", nextSlide);
        clearInterval();
        click = 0;
        return;
      }
    }, 30);
  }
});
