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

let futureDate = new Date();

let futureDateTime = futureDate.getTime() + 7782000000;
futureDate = new Date(futureDateTime);

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
    
      inputError.classList.add("temporary");
    } else if (containsNumbers(input.value)) {
   

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
  if (!containsSpecialCharacters(phone.value) && !containsLetters(phone.value)){
    inputError.classList.remove('show-error')
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


  if (numberLength === 0 || numberLength === 10) {
   

    if (showError) {
    
      phoneError2.classList.remove("show-error");
    }
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const phoneInputError = phone.nextElementSibling.children[0];
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
   
        guestInputError.classList.add("show-error");
      }
    }
  }
  if (!guestInputError.classList.contains("show-error")) {
    if (
      (Number(guestInput.value) < 1 && guestInput.value !== "") ||
      Number(guestInput.value) > 110
    ) {
   
      guestInputNumberError.classList.add("show-error");
    }
  }


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



  if (containsSpecialCharacters(phone.value) || containsLetters(phone.value)) {
    phoneInputError.classList.add("show-error");
  } else {
    if (phoneInputError.classList[1] === "show-error")
      phoneInputError.classList.remove("show-error");
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

   
    const afterAtSign = emailInput.value.indexOf("@") + 1;
    if (emailInput.value.charAt(0) === "@") {
     
      emailErrorFlag = true;
    }
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".com")) {
   
      emailErrorFlag = true;
    }

    if (emailInput.value.includes(".com") && emailInput.value.includes("@")) {
      if (emailInput.value.indexOf(".com") < emailInput.value.indexOf("@")) {
        
        emailErrorFlag = true;
      }
    }

    if (emailInput.value.charAt(afterAtSign) === ".") {
   
      emailErrorFlag = true;
    }

    if (emailInput.value.slice(-4) !== ".com") {
    
      emailErrorFlag = true;
    }

    if (emailInput.value.charAt(emailInput.value.indexOf("@") - 1) === ".") {
    
      emailErrorFlag = true;
    }

    if (emailInput.value.charAt(emailInput.value.indexOf("@") + 1) === ".") {
     
      emailErrorFlag = true;
    }
    if (emailInput.value.charAt(emailInput.value.indexOf(".com") - 1) === ".") {
   
      emailErrorFlag = true;
    }
    if (emailInput.value.charAt(0) === ".") {
 
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

    }
    if (keywordCount > 2) {
    
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

  const reservationDateMS = reservationDate.getTime();


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
 
  }

  switch (reservationDay) {
    case "sunday":
      validHours = openHours.sunday;
     
      break;
    case "monday":
      validHours = openHours.monday;
   
      break;
    case "tuesday":
      validHours = openHours.tuesday;
   
      break;
    case "wednesday":
      validHours = openHours.wednesday;
   
      break;
    case "thursday":
      validHours = openHours.thursday;
   
      break;
    case "friday":
      validHours = openHours.friday;
   
      break;
    case "saturday":
      validHours = openHours.saturday;
   
      break;
    default:
     
  }
  if (
    containsNumbers(time1) &&
    !containsLetters(time1) &&
    !containsSpecialCharacters(time1) &&
    time1Format === ":"
  ) {
   
    timeNull0Decrement = 1;
  } else if (
    containsNumbers(time1Double) &&
    !containsLetters(time1Double) &&
    !containsSpecialCharacters(time1Double) &&
    time1DoubleFormat === ":"
  ) {
    timeNull0Decrement = 0;
    
  } else {
    timeValidatePassFlag = false;
 
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

    return;
  }

  if (
    containsNumbers(time2) &&
    !containsLetters(time2) &&
    !containsSpecialCharacters(time2) &&
    !time2.includes(" ")
  ) {

  } else {
    timeValidatePassFlag = false;
   
  }
  if (Number(time1Double) > 12 || Number(time1) > 9 || Number(time2) > 59) {
    timeValidatePassFlag = false;
  }
  if (time2Format === "a" || time2Format === "p") timeNull0Decrement++;
  let ampm = timeInput.value.slice(6 - timeNull0Decrement);

  if (
    ampm.toLowerCase().includes("am") ||
    ampm.toLowerCase().includes("a.m.")
  ) {
  
  } else if (
    ampm.toLowerCase().includes("pm") ||
    ampm.toLowerCase().includes("p.m.")
  ) {
   
  } else {
    timeValidatePassFlag = false;
  
  }

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
             
              timeErrorFlag2 = true;
            } else {
           
            }
          } else {
           
            timeErrorFlag2 = true;
          }
        } else {
      
        }
      } else {
      
        timeErrorFlag2 = true;
      }
    } else {
     
      timeErrorFlag2 = true;
    }
  }
}

function monthValidate() {
  if (dateInput.length > 12) return;

  let date = dateInput.value.slice(0, 2);
  let dateNull0 = dateInput.value.slice(0, 1);
  let dateNull0Format = dateInput.value.slice(1, 2);
  let dateFormat = dateInput.value.slice(2, 3);

  if (
    containsNumbers(date) &&
    !containsLetters(date) &&
    !containsSpecialCharacters(date) &&
    dateFormat === "/" &&
    Number(date) <= 12
  ) {
   
    return date;
  } else if (
    containsNumbers(dateNull0) &&
    !containsLetters(dateNull0) &&
    !containsSpecialCharacters(dateNull0) &&
    dateNull0Format === "/" &&
    Number(dateNull0) <= 9
  ) {
    dateNull0Decrement = 1;
 
    return date;
  } else {
 
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
  
    return date2;
  } else {
  
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

    dateNull0Decrement = 0;
    return date;
  } else {
    dateNull0Decrement = 0;

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
