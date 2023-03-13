const iconContainer = document.querySelector(".icon-container");

iconContainer.addEventListener("click", () => {
  const reservationForm = document.querySelector(".reservation-form");
  const ordersForm = document.querySelector(".orders-form");
  const labels = document.querySelectorAll("form label");
  let msCheckArray = [];
  let delay = 50;
  let delayTracker = 0;
  let intervalID;
  let isFullyActive;
  iconContainer.classList.toggle("on");
  iconContainer.children[0].classList.toggle("icon-on");

  if (reservationForm !== null) {
    reservationForm.classList.toggle("active");
    intervalID = setInterval(() => {
      follower(reservationForm);
    }, delay);
  }
  if (ordersForm !== null) {
    ordersForm.classList.toggle("active");
    intervalID = setInterval(() => {
      follower(ordersForm);
    }, delay);
  }
  function follower(form) {
    if (form.classList.contains("active")) {
      msCheckArray.push(true);
    } else {
      msCheckArray.push(false);
    }
    delayTracker += delay;
    console.log(delayTracker);
    // delayTracker >= 300 && clearInterval(intervalID)
    if (delayTracker >= 300) {
      clearInterval(intervalID);
      isFullyActive = msCheckArray.every((item) => item === true);
      console.log(msCheckArray);
      console.log(isFullyActive);
      if (isFullyActive === true) {
        labels.forEach((label) => {
          label.classList.add("show-labels");

          console.log(label);
        });
      } else if (isFullyActive === false) {
        labels.forEach((label) => {
          label.classList.remove("show-labels");

          console.log(label);
        });
      }
    }
  }
});
