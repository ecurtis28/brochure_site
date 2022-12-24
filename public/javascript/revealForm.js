const iconContainer = document.querySelector(".icon-container");



iconContainer.addEventListener("click", () => {
  const reservationForm = document.querySelector(".reservation-form");
  const ordersForm = document.querySelector(".orders-form")
  iconContainer.classList.toggle("on");
  iconContainer.children[0].classList.toggle("icon-on");

  if(reservationForm !== null){
    reservationForm.classList.toggle("active");
  }
  if(ordersForm !== null){
    ordersForm.classList.toggle("active");
  }

 
});
