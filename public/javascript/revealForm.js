const iconContainer = document.querySelector(".icon-container");
const reservationForm = document.querySelector(".reservation-form");

iconContainer.addEventListener("click", () => {
  iconContainer.classList.toggle("on");
  iconContainer.children[0].classList.toggle("icon-on");
  reservationForm.classList.toggle("active");
});
