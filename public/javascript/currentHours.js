const hours = document.querySelector(".footer-hours");
const pm = document.querySelector(".pm")
const today = document.querySelector(".today");
const date = new Date();
let day = date.getDay();
switch (day) {
  case 0:
    day = "Sunday";
    today.innerText = `${day}`;
    hours.innerText = "3:00 p.m. - 11:00"
    pm.innerText ="p.m."
    break;
  case 1:
    day = "Monday";
    today.innerText = `${day}`;
    hours.innerText = "4:00 p.m. - 11:00"
    pm.innerText ="p.m."
    break;
  case 2:
    day = "Tuesday";
    today.innerText = `${day}`;
    hours.innerText = "4:00 p.m. - 11:00"
    pm.innerText ="p.m."
    break;
  case 3:
    day = "Wednesday";
    today.innerText = `${day}`;
    hours.innerText = "4:00 p.m. - 11:00"
    pm.innerText ="p.m."
    break;
  case 4:
    day = "Thursday";
    today.innerText = `${day}`;
    hours.innerText = "5:00 p.m. - 9:30"
    pm.innerText ="p.m."
    break;
  case 5:
    day = "Friday";
    today.innerText = `${day}`;
    hours.innerText = "3:00 p.m. - 11:00"
    pm.innerText ="p.m."
    break;
  case 6:
    day = "Saturday";
    today.innerText = `${day}`;
    hours.innerText = "5:00 p.m. - 9:30"
    pm.innerText ="p.m."
    break;
}
