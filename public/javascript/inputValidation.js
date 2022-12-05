const parentNames = document.querySelectorAll(".name");
const submit = document.querySelector(".submit");
const phoneError2 = document.querySelector(".phone-error-format");
const phoneErrorInput = phoneError2.parentElement.previousElementSibling;
const emailInput = document.querySelector(".email-container input");
const guestInput = document.querySelector(".guest-container input");
const dateInput = document.querySelector(".date-container input");
const inputErrors = document.querySelectorAll(".input-error");
const emptyErrors = document.querySelectorAll(".empty-error");
const descendants = document.querySelectorAll("*");
const phone = document.querySelector("#phone");

let emailErrorFlag = false;
let dateErrorFlag = false;
let flag1 = true;
let flag2 = true;
let flag3 = true;
window.addEventListener("load", () => {
  console.log("onload working successfully");
});

parentNames.forEach((parentName) => {
  const input = parentName.children[1];
  const inputError = parentName.children[2].children[0];

  input.addEventListener("input", function () {
    if (containsSpecialCharacters(input.value)) {
      console.log("includes special characters");
      inputError.classList.add("show-error");
    } else if (containsNumbers(input.value)) {
      console.log("includes numbers");

      inputError.classList.add("show-error");
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
  const numberLength = phone.value.replace(/\D/g, "").length;
  const phoneError = document.querySelector(".phone-error-format");
  const reservationForm = document.querySelector(".reservation-form");
  const emailInputError = document.querySelector(".email-format-error");
  const guestInputError = guestInput.nextElementSibling.children[1];
  let errorNumber = 0;

  e.preventDefault();
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
  if (
    (Number(guestInput.value) < 1 && guestInput.value !== "") ||
    Number(guestInput.value) > 110
  ) {
    const guestInputError = guestInput.nextElementSibling.children[2];
    console.log(guestInputError, Number(guestInput.value));
    guestInputError.classList.add("show-error");
  }

  // if (
  //   // emailInput.value.charAt(0) === "@" ||
  //   // (!emailInput.value.includes("@") && !emailInput.value.includes(".com")) //||
  //   // emailInput.value.indexOf(".com") < emailInput.value.indexOf("@") ||
  //   // emailInput.value.indexOf("@") + 1 === "." ||
  //   // emailInput.value.length > emailInput.value.indexOf(".com")
  // ) {

  // }

  if (emailErrorFlag === true) {
    emailInputError.classList.add("show-error");
    emailErrorFlag = false;
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
    if (emailErrorFlag === false) {
      emailInputError.classList.remove("show-error");
    }
  }
  emailInputValidation();
});

dateInput.addEventListener("input", () => {
  const dateInputError = document.querySelector(".date-format-error");
  if (containsLetters(dateInput.value)) {
    console.log("contains letters");
    dateErrorFlag = true;
  }

  if (dateInput === false) {
    dateInputError.classList.remove("show-error");
  }
});

function containsNumbers(str) {
  return /\d/.test(str);
}
function containsSpecialCharacters(str) {
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
  const intersection = strArray.filter((element) =>
    charArray.includes(element)
  );

  return intersection.length > 0;
}

function containsLetters(str) {
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
  const intersection = strArray.filter((element) =>
    charArray.includes(element)
  );
  return intersection.length > 0;
}
