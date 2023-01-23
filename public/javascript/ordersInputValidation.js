const submit = document.querySelector(".submit");
const parentNames = document.querySelectorAll(".name");
const inputErrors = document.querySelectorAll(".input-error");
const emptyErrors = document.querySelectorAll(".empty-error");
const addressInput = document.querySelector(".address input");
const ordersForm = document.querySelector(".orders-form");
const table = document.querySelector("tbody");

parentNames.forEach((parentName) => {
  const input = parentName.children[1];
  const inputError = parentName.children[2].children[0];

  input.addEventListener("input", function () {
    emptyErrors.forEach((emptyError) => {
      const emptyInput = emptyError.parentElement.previousElementSibling;

      
      if (emptyInput.value.length > 0) {
        emptyError.classList.remove("show-error");
      }
    });
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

addressInput.addEventListener("input", function () {
  if (addressInput.value.length > 0) {
    

    addressInput.nextElementSibling.children[0].classList.remove("show-error");
  }
});
submit.addEventListener("click", (e) => {

  let errorNumber = 0;
  emptyErrors.forEach((emptyError) => {
    input = emptyError.parentElement.previousElementSibling;

    if (input.value.length === 0) {
      emptyError.classList.add("show-error");
    }
  });
  inputErrors.forEach((inputError) => {
    if (inputError.classList.contains("show-error")) errorNumber++;
  });
  parentNames.forEach((parentName) => {
    const input = parentName.children[1];
    const inputError = parentName.children[2].children[0];
    if (inputError.classList.contains("temporary")) {
      inputError.classList.remove("temporary");
      inputError.classList.add("show-error");
    }
  });

  inputErrors.forEach((inputError) => {
    const classList = inputError.classList;

    if (
      Array.from(classList).filter((word) => word === "show-error").length > 0
    ) {
      errorNumber++;
    }
  });

  if (errorNumber === 0) {
    if (table.children.length  >1) {
      ordersForm.submit();
    }
  } else {
    errorNumber = 0;
  }
});
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
