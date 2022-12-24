const parentNames = document.querySelectorAll(".name");
const submit = document.querySelector(".submit");
const phoneError2 = document.querySelector(".phone-error-format");
const phoneErrorInput = phoneError2.parentElement.previousElementSibling;
const emailInput = document.querySelector(".email-container input");
const guestInput = document.querySelector(".guest-container input");
const dateInput = document.querySelector(".date-container input");
const timeInput = document.querySelector(".time-container input");

const inputErrors = document.querySelectorAll(".input-error");
const emptyErrors = document.querySelectorAll(".empty-error");
const descendants = document.querySelectorAll("*");
const phone = document.querySelector("#phone");
const dateInputError = document.querySelector(".date-format-error");
const dateInputFutureError = document.querySelector(".date-future-error");
const dateInputPastError = document.querySelector(".date-past-error");
const timeInputError = document.querySelector(".time-format-error");
const closingTimeError = document.querySelector(".closing-time-error");
console.log("working still");
let emailErrorFlag = false;
let dateErrorFlag1 = false;
let dateErrorFlag2 = false;
let dateErrorFlag3 = false;
let timeErrorFlag1 = false;
let timeErrorFlag2 = false;

let reservationDay;

let dateNull0Decrement = 0;
let timeNull0Decrement = 0;
let flag1 = true;
let flag2 = true;
let flag3 = true;
window.addEventListener("load", () => {
  console.log("onload working successfully");
});

let futureDate = new Date();

let futureDateTime = futureDate.getTime() + 7782000000;
futureDate = new Date(futureDateTime);
console.log(futureDate);
var theYear = futureDate.getFullYear();
var theMonth = futureDate.getMonth() + 1;
var theDay = futureDate.getDate();
document.getElementsByName(
  "date"
)[0].placeholder = `${theMonth}/${theDay}/${theYear}`;

parentNames.forEach((parentName) => {
  const input = parentName.children[1];
  const inputError = parentName.children[2].children[0];

  input.addEventListener("input", function () {
    if (containsSpecialCharacters(input.value)) {
      console.log("includes special characters");
      inputError.classList.add("temporary");
    } else if (containsNumbers(input.value)) {
      console.log("includes numbers");

      inputError.classList.add("temporary");
    } else {
      if (inputError.classList[2] === "show-error") {
        inputError.classList.remove("show-error");
      }
    }
  });
});

phone.addEventListener("input", function () {
  const inputError = phone.nextElementSibling.children[0];
  let numberLength = phone.value.replace(/\D/g, "").length;

  if (containsSpecialCharacters(phone.value) || containsLetters(phone.value)) {
    inputError.classList.add("show-error");
  } else {
    if (inputError.classList[1] === "show-error")
      inputError.classList.remove("show-error");
  }

  if (numberLength === 0) {
    flag1 = true;
  } else if (numberLength === 3) {
    if (flag1 === true) {
      phone.value += "-";
      flag1 = false;
    }
    flag2 = true;
  } else if (numberLength === 6) {
    if (flag2 === true) {
      phone.value += "-";
      flag2 = false;
    }
    flag3 = true;
  }
});

emptyErrors.forEach((emptyError) => {
  const input = emptyError.parentElement.previousElementSibling;

  input.addEventListener("input", () => {
    if (input.value.length > 0) {
      const classList = emptyError.classList;
      const showError = Array.from(classList).filter(
        (word) => word === "show-error"
      );

      if (showError) {
        emptyError.classList.remove("show-error");
      }
    }
  });
});

phoneErrorInput.addEventListener("input", () => {
  const numberLength = phoneErrorInput.value.replace(/\D/g, "").length;
  const classList = phoneError2.classList;
  const showError = Array.from(classList).filter(
    (word) => word === "show-error"
  );
  console.log(showError, phoneError2);

  if (numberLength === 0 || numberLength === 10) {
    console.log(phoneErrorInput.value.length);

    if (showError) {
      console.log("success", phoneError2);
      phoneError2.classList.remove("show-error");
    }
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const numberLength = phone.value.replace(/\D/g, "").length;
  const phoneError = document.querySelector(".phone-error-format");
  const reservationForm = document.querySelector(".reservation-form");
  const emailInputError = document.querySelector(".email-format-error");
  const timeInputError = document.querySelector(".time-format-error");
  const guestInputError = guestInput.nextElementSibling.children[1];
  const guestInputNumberError = guestInput.nextElementSibling.children[2];
  let errorNumber = 0;

  let emptyTimeErrorClassList =
    timeInputError.nextElementSibling.nextElementSibling.classList;
  let emptyTimeShowError = Array.from(emptyTimeErrorClassList).filter(
    (word) => word === "show-error"
  );

  let emptyDateErrorClassList =
    dateInputError.nextElementSibling.nextElementSibling.classList;
  let emptyDateShowError = Array.from(emptyDateErrorClassList).filter(
    (word) => word === "show-error"
  );

  let input;
  emptyErrors.forEach((emptyError) => {
    input = emptyError.parentElement.previousElementSibling;

    if (input.value.length === 0) {
      emptyError.classList.add("show-error");
    }
  });

  if (numberLength < 10 && numberLength > 0) {
    phoneError.classList.add("show-error");
  }

  if (!guestInputNumberError.classList.contains("show-error")) {
    if (
      containsSpecialCharacters(guestInput.value) === true ||
      containsLetters(guestInput.value) === true
    ) {
      console.log("special characters or letters");
      guestInputError.classList.add("show-error");
    } else {
      const guestInputArr = Array.from(guestInput.value);
      let includesDashesOnly = null;
      guestInputArr.forEach((char) => {
        if (char !== "-") {
          includesDashesOnly = false;
        } else {
          includesDashesOnly = true;
        }
      });
      if (includesDashesOnly === true) {
        console.log("only dashes");
        guestInputError.classList.add("show-error");
      }
    }
  }
  if (!guestInputError.classList.contains("show-error")) {
    if (
      (Number(guestInput.value) < 1 && guestInput.value !== "") ||
      Number(guestInput.value) > 110
    ) {
      console.log(guestInputError, Number(guestInput.value));
      guestInputNumberError.classList.add("show-error");
    }
  }
  // if (
  //   // emailInput.value.charAt(0) === "@" ||
  //   // (!emailInput.value.includes("@") && !emailInput.value.includes(".com")) //||
  //   // emailInput.value.indexOf(".com") < emailInput.value.indexOf("@") ||
  //   // emailInput.value.indexOf("@") + 1 === "." ||
  //   // emailInput.value.length > emailInput.value.indexOf(".com")
  // ) {

  parentNames.forEach((parentName) => {
    const input = parentName.children[1];
    const inputError = parentName.children[2].children[0];
    if (inputError.classList.contains("temporary")) {
      inputError.classList.remove("temporary");
      inputError.classList.add("show-error");
    }
  });

  if (emailErrorFlag === true) {
    emailInputError.classList.add("show-error");
    emailErrorFlag = false;
  }
  if (dateErrorFlag1 === true && dateInput.value.length !== 0) {
    dateInputError.classList.add("show-error");
    dateErrorFlag1 = false;
    console.log(emptyDateShowError);

    if (emptyDateShowError.length !== 0)
      dateInputError.classList.remove("show-error");
  }

  if (dateErrorFlag2 === true && dateInput.value.length !== 0) {
    dateInputFutureError.classList.add("show-error");
    dateErrorFlag2 = false;
  }
  if (dateErrorFlag3 === true && dateInput.value.length !== 0) {
    dateInputPastError.classList.add("show-error");
    dateErrorFlag3 = false;
  }

  if (timeErrorFlag1 === true && timeInput.value.length !== 0) {
    timeInputError.classList.add("show-error");
    timeErrorFlag1 = false;
    if (emptyTimeShowError.length !== 0) {
      timeInputError.nextElementSibling.nextElementSibling.classList.remove(
        "show-error"
      );
    }
  }
  if (timeErrorFlag2 === true && timeInput.value.length !== 0) {
    closingTimeError.classList.add("show-error");
    timeErrorFlag2 = false;
  }

  inputErrors.forEach((inputError) => {
    const classList = inputError.classList;

    if (
      Array.from(classList).filter((word) => word === "show-error").length > 0
    ) {
      errorNumber++;
    }
  });

  if (errorNumber === 0) {
    reservationForm.submit();
  } else {
    errorNumber = 0;
  }
});

guestInput.addEventListener("input", () => {
  if (
    containsSpecialCharacters(guestInput.value) === false ||
    containsLetters(guestInput.value) === false
  ) {
    const guestInputError = guestInput.nextElementSibling.children[1];
    const classList = guestInputError.classList;
    const showError = Array.from(classList).filter(
      (word) => word === "show-error"
    );
    if (showError) guestInputError.classList.remove("show-error");
  }

  if (Number(guestInput.value) >= 1 && Number(guestInput.value) <= 110) {
    const guestInputError = guestInput.nextElementSibling.children[2];
    const classList = guestInputError.classList;
    const showError = Array.from(classList).filter(
      (word) => word === "show-error"
    );
    if (showError) guestInputError.classList.remove("show-error");
  }
  if (guestInput.value === "") {
    const guestInputError = guestInput.nextElementSibling.children[2];
    const classList = guestInputError.classList;
    const showError = Array.from(classList).filter(
      (word) => word === "show-error"
    );
    if (showError) guestInputError.classList.remove("show-error");
  }
});
emailInput.addEventListener("input", () => {
  function emailInputValidation() {
    emailErrorFlag = false;
    const emailInputError = document.querySelector(".email-format-error");
    let target1 = emailInput.value;
    const keywords = [];
    const positionArr = [];
    let keywordCount = 0;

    console.log(
      emailInput.value.length,

      emailInput.value.indexOf(".com") + 4
    );
    const afterAtSign = emailInput.value.indexOf("@") + 1;
    if (emailInput.value.charAt(0) === "@") {
      console.log("@ 1");
      emailErrorFlag = true;
    }
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".com")) {
      console.log("no @ and .com");
      emailErrorFlag = true;
    }

    if (emailInput.value.includes(".com") && emailInput.value.includes("@")) {
      if (emailInput.value.indexOf(".com") < emailInput.value.indexOf("@")) {
        console.log(".com before @");
        emailErrorFlag = true;
      }
    }

    if (emailInput.value.charAt(afterAtSign) === ".") {
      console.log(". after @");
      emailErrorFlag = true;
    }

    if (emailInput.value.slice(-4) !== ".com") {
      console.log(".com not last in string");
      emailErrorFlag = true;
    }

    if (emailInput.value.charAt(emailInput.value.indexOf("@") - 1) === ".") {
      console.log(
        "no . before @",
        emailInput.value.charAt(emailInput.value.indexOf("@") - 1)
      );
      emailErrorFlag = true;
    }

    if (emailInput.value.charAt(emailInput.value.indexOf("@") + 1) === ".") {
      console.log(
        "no . after @",
        emailInput.value.charAt(emailInput.value.indexOf("@") + 1)
      );
      emailErrorFlag = true;
    }
    if (emailInput.value.charAt(emailInput.value.indexOf(".com") - 1) === ".") {
      console.log(
        "no . before .com",
        emailInput.value.charAt(emailInput.value.indexOf(".com") - 1)
      );
      emailErrorFlag = true;
    }
    if (emailInput.value.charAt(0) === ".") {
      console.log("no . as first character");
      emailErrorFlag = true;
    }

    while (target1.includes("@") || target1.includes(".com")) {
      positionArr.push(
        emailInput.value.indexOf("@"),
        emailInput.value.indexOf("@") + 1
      );

      positionArr.push(
        emailInput.value.indexOf(".com"),
        emailInput.value.indexOf(".com") + 4
      );
      if (target1.includes("@")) {
        keywords.push("@");
        keywordCount++;
      }
      if (target1.includes(".com")) {
        keywords.push(".com");
        keywordCount++;
      }
      target1 = target1.replace("@", "_").replace(".com", "_-_-");

      console.log(positionArr);
    }
    if (keywordCount > 2) {
      console.log("duplicates");
      emailErrorFlag = true;
    }
    if (emailInput.value.length === 0) {
      emailErrorFlag = false;
    }
    if (emailErrorFlag === false) {
      emailInputError.classList.remove("show-error");
    }
  }
  emailInputValidation();
});

dateInput.addEventListener("input", () => {
  dateErrorFlag1 = false;
  dateErrorFlag2 = false;
  dateErrorFlag3 = false;
  const currentDateMS = Date.now();
  const pastDateMS = Date.now() - 86400000;
  const futureDateMS = Date.now() + 63113852000;
  const reservationDate = new Date(`${dateInput.value}`);
  reservationDay = reservationDate.getDay();
  console.log("reservationDay:", reservationDay);
  const reservationDateMS = reservationDate.getTime();

  console.log(currentDateMS, pastDateMS, futureDateMS, reservationDateMS);
  console.log(dateInput.value);

  if (
    monthValidate() === undefined ||
    dayValidate() === undefined ||
    yearValidate() === undefined
  ) {
    dateErrorFlag1 = true;
  }
  if (reservationDateMS > futureDateMS || typeof reservationDateMS === NaN) {
    dateErrorFlag2 = true;
  }
  if (reservationDateMS < pastDateMS) {
    dateErrorFlag3 = true;
  }
  if (dateErrorFlag1 === false || dateInput.value.length === 0) {
    dateInputError.classList.remove("show-error");
  }
  if (dateErrorFlag2 === false) {
    dateInputFutureError.classList.remove("show-error");
  }
  if (dateErrorFlag3 === false) {
    dateInputPastError.classList.remove("show-error");
  }
});

timeInput.addEventListener("input", () => {
  timeValidate();
  if (timeValidatePassFlag === false) timeErrorFlag1 = true;
  if (timeErrorFlag1 === false) {
    timeInputError.classList.remove("show-error");
  }
  if (timeErrorFlag2 === false) {
    closingTimeError.classList.remove("show-error");
  }
  if (timeInput.value.length === 0) {
    timeInputError.classList.remove("show-error");
  }
  // if(timeErrorFlag2 === false) {
  //   closingTimeError.classList.remove("show-error")
  // }
  console.log(timeInput.value.length);
});

function timeValidate() {
  dateNull0Decrement = 0;
  timeErrorFlag1 = false;
  timeErrorFlag2 = false;
  timeValidatePassFlag = true;
  let validHours;
  const openHours = {
    monday: [4, 11],
    tuesday: [4, 11],
    wednesday: [4, 11],
    thursday: [5, 930],
    friday: [3, 11],
    saturday: [5, 930],
    sunday: [3, 11],
  };
  let time = timeInput.value;
  let time1 = timeInput.value.slice(0, 1);
  let time1Format = timeInput.value.slice(1, 2);
  let time1Double = timeInput.value.slice(0, 2);
  let time1DoubleFormat = timeInput.value.slice(2, 3);

  switch (reservationDay) {
    case 0:
      reservationDay = "sunday";
      break;
    case 1:
      reservationDay = "monday";
      break;
    case 2:
      reservationDay = "tuesday";
      break;
    case 3:
      reservationDay = "wednesday";
      break;
    case 4:
      reservationDay = "thursday";
      break;
    case 5:
      reservationDay = "friday";
      break;
    case 6:
      reservationDay = "saturday";
      break;
    default:
      console.log("reservation day error");
  }

  switch (reservationDay) {
    case "sunday":
      validHours = openHours.sunday;
      console.log("valid hours: ", validHours);
      break;
    case "monday":
      validHours = openHours.monday;
      console.log("valid hours: ", validHours);
      break;
    case "tuesday":
      validHours = openHours.tuesday;
      console.log("valid hours: ", validHours);
      break;
    case "wednesday":
      validHours = openHours.wednesday;
      console.log("valid hours: ", validHours);
      break;
    case "thursday":
      validHours = openHours.thursday;
      console.log("valid hours: ", validHours);
      break;
    case "friday":
      validHours = openHours.friday;
      console.log("valid hours: ", validHours);
      break;
    case "saturday":
      validHours = openHours.saturday;
      console.log("valid hours: ", validHours);
      break;
    default:
      console.log("reservation day error");
  }
  if (
    containsNumbers(time1) &&
    !containsLetters(time1) &&
    !containsSpecialCharacters(time1) &&
    time1Format === ":"
  ) {
    console.log("working");
    timeNull0Decrement = 1;
  } else if (
    containsNumbers(time1Double) &&
    !containsLetters(time1Double) &&
    !containsSpecialCharacters(time1Double) &&
    time1DoubleFormat === ":"
  ) {
    timeNull0Decrement = 0;
    console.log("working");
  } else {
    timeValidatePassFlag = false;
    console.log("fail");
  }

  let time2 = timeInput.value.slice(
    3 - timeNull0Decrement,
    5 - timeNull0Decrement
  );

  let time2Format = timeInput.value.slice(
    5 - timeNull0Decrement,
    6 - timeNull0Decrement
  );

  if (timeInput.length > 10) {
    timeValidatePassFlag = false;
    console.log("fail");
    return;
  }

  if (
    containsNumbers(time2) &&
    !containsLetters(time2) &&
    !containsSpecialCharacters(time2) &&
    !time2.includes(" ")
  ) {
    console.log("working");
  } else {
    timeValidatePassFlag = false;
    console.log("fail");
  }
  if (Number(time1Double) > 12 || Number(time1) > 9 || Number(time2) > 59) {
    timeValidatePassFlag = false;
  }
  if (time2Format === "a" || time2Format === "p") timeNull0Decrement++;
  let ampm = timeInput.value.slice(6 - timeNull0Decrement);
  console.log(time.slice(0, 5 - timeNull0Decrement));
  if (
    ampm.toLowerCase().includes("am") ||
    ampm.toLowerCase().includes("a.m.")
  ) {
    console.log("working");
  } else if (
    ampm.toLowerCase().includes("pm") ||
    ampm.toLowerCase().includes("p.m.")
  ) {
    console.log("working");
  } else {
    timeValidatePassFlag = false;
    console.log("fail");
  }
  console.log(
    "time1:",
    Number(time1),
    "time1Double",
    Number(time1Double),
    "time2:",
    Number(time2),
    validHours
  );
  if (timeValidatePassFlag === true) {
    if (
      ampm.toLowerCase().includes("pm") ||
      ampm.toLowerCase().includes("p.m.")
    ) {
      if (Number(time1Double) === 12) {
        time1Double = 0;
      }
      if (
        (Number(time1) >= validHours[0] ||
          Number(time1Double) >= validHours[0]) &&
        (Number(time1) <= validHours[1] || Number(time1Double) <= validHours[1])
      ) {
        if (
          (Number(time1) > validHours[0] ||
            Number(time1Double) > validHours[0]) &&
          (Number(time1) < validHours[1] || Number(time1Double) < validHours[1])
        ) {
          if (Number(time2) >= 0 && Number(time2) <= 59) {
            if (
              Number(time2) > 0 &&
              (Number(time1) === Number(validHours[1]) ||
                Number(time1Double) === Number(validHours[1]))
            ) {
              console.log("valid hours failure");
              timeErrorFlag2 = true;
            } else {
              console.log("valid hours success");
            }
          } else {
            console.log("valid hours failure");
            timeErrorFlag2 = true;
          }
        } else {
          console.log("valid hours success");
        }
      } else {
        console.log("valid hours failure");
        timeErrorFlag2 = true;
      }
    } else {
      console.log("valid hours failure");
      timeErrorFlag2 = true;
    }
  }
}

function monthValidate() {
  if (dateInput.length > 12) return;

  let date = dateInput.value.slice(0, 2);
  let dateNull0 = dateInput.value.slice(0, 1); // 0 not in format e.g 2/3/2022 instead of 02/3/2022
  let dateNull0Format = dateInput.value.slice(1, 2);
  let dateFormat = dateInput.value.slice(2, 3);

  if (
    containsNumbers(date) &&
    !containsLetters(date) &&
    !containsSpecialCharacters(date) &&
    dateFormat === "/" &&
    Number(date) <= 12
  ) {
    console.log("success");
    return date;
  } else if (
    containsNumbers(dateNull0) &&
    !containsLetters(dateNull0) &&
    !containsSpecialCharacters(dateNull0) &&
    dateNull0Format === "/" &&
    Number(dateNull0) <= 9
  ) {
    dateNull0Decrement = 1;
    console.log("success");
    return date;
  } else {
    console.log("fail");
  }
}
function dayValidate() {
  if (dateInput.length > 12) return;

  let date1 = dateInput.value.slice(
    3 - dateNull0Decrement,
    4 - dateNull0Decrement
  );
  let date2 = dateInput.value.slice(
    3 - dateNull0Decrement,
    5 - dateNull0Decrement
  );
  let dateFormat1 = dateInput.value.slice(
    4 - dateNull0Decrement,
    5 - dateNull0Decrement
  );
  let dateFormat2 = dateInput.value.slice(
    5 - dateNull0Decrement,
    6 - dateNull0Decrement
  );

  if (
    containsNumbers(date1) &&
    !containsLetters(date1) &&
    !containsSpecialCharacters(date1) &&
    dateFormat1 === "/" &&
    Number(date1) <= 31
  ) {
    console.log("success");
    return date1;
  } else if (
    containsNumbers(date2) &&
    !containsLetters(date2) &&
    !containsSpecialCharacters(date2) &&
    dateFormat2 === "/" &&
    Number(date2) <= 31
  ) {
    if (dateNull0Decrement === 0) dateNull0Decrement = -1;
    else if (dateNull0Decrement === 1) dateNull0Decrement = 0;
    console.log("success");
    return date2;
  } else {
    console.log("fail");
  }
}

function yearValidate() {
  if (dateInput.length > 12) return;

  let date = dateInput.value.slice(5 - dateNull0Decrement);

  if (
    (containsNumbers(date) &&
      !containsLetters(date) &&
      !containsSpecialCharacters(date) &&
      date.length === 2) ||
    (containsNumbers(date) &&
      !containsLetters(date) &&
      !containsSpecialCharacters(date) &&
      date.length === 4)
  ) {
    console.log("success");
    dateNull0Decrement = 0;
    return date;
  } else {
    dateNull0Decrement = 0;
    console.log("fail");
  }
}

function containsNumbers(str) {
  return /\d/.test(str);
}
function containsSpecialCharacters(str, exception = []) {
  const strArray = Array.from(str);
  const charArray = [
    "#",
    "!",
    "@",
    "%",
    "$",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ";",
    ":",
    '"',
    "'",
    "\\",
    " |",
    "?",
    "/",
    ">",
    ".",
    "<",
    ",",
  ];
  const exceptionArray = exception.filter((item) => charArray.includes(item));

  exceptionArray.forEach((exceptionItem) => {
    if (charArray.includes(exceptionItem)) {
      charArray.splice(charArray.indexOf(exceptionItem), 1);
    }
  });

  const intersection = strArray.filter((element) =>
    charArray.includes(element)
  );

  return intersection.length > 0;
}

function containsLetters(str, exception = []) {
  const strArray = Array.from(str);
  const charArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const exceptionArray = exception.filter((item) => charArray.includes(item));

  exceptionArray.forEach((exceptionItem) => {
    if (charArray.includes(exceptionItem)) {
      charArray.splice(charArray.indexOf(exceptionItem), 1);
    }
  });

  const intersection = strArray.filter((element) =>
    charArray.includes(element)
  );
  return intersection.length > 0;
}
