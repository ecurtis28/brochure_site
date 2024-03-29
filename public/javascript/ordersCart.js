function adjustContentPosition() {
  const tableRows = document.querySelectorAll(".table-row");
  const body = document.querySelector("body");
  let contentAdjustFlag = 0;
  let contentAdjustFlag2 = 0;
  let contentAdjustFlag3 = 0;
  let contentAdjustFlag4 = 0;
  tableRows.forEach((tableRow) => {
    if (tableRow.textContent.includes("Zeppole")) {
      const observer = new ResizeObserver((entries) => {
        const bodyElement = entries[0];

        if (
          bodyElement.contentRect.width <= 565 &&
          bodyElement.contentRect.width > 560 &&
          contentAdjustFlag === 0
        ) {
          tableRow.firstChild.style.transform = "translateY(0.1rem)";

          contentAdjustFlag = 1;
        } else if (
          bodyElement.contentRect.width > 565 &&
          bodyElement.contentRect.width < 600 &&
          contentAdjustFlag === 1
        ) {
          tableRow.firstChild.style.transform = "translateY(0rem)";

          contentAdjustFlag = 0;
        }

        if (
          bodyElement.contentRect.width <= 489 &&
          bodyElement.contentRect.width > 449 &&
          contentAdjustFlag2 === 0
        ) {
          tableRow.firstChild.style.transform = "translateY(0rem)";
          contentAdjustFlag2 === 1;
        } else if (
          bodyElement.contentRect.width > 489 &&
          bodyElement.contentRect.width < 520 &&
          contentAdjustFlag2 === 0
        ) {
          tableRow.firstChild.style.transform = "translateY(0.1rem)";
          contentAdjustFlag2 === 0;
        }

        if (
          bodyElement.contentRect.width <= 449 &&
          bodyElement.contentRect.width > 405 &&
          contentAdjustFlag3 === 0
        ) {
          tableRow.firstChild.style.transform = "translateY(0.1rem)";

          contentAdjustFlag3 = 1;
        } else if (
          bodyElement.contentRect.width > 449 &&
          bodyElement.contentRect.width < 506 &&
          contentAdjustFlag3 === 1
        ) {
          tableRow.firstChild.style.transform = "translateY(0rem)";

          contentAdjustFlag3 = 0;
        }

        if (bodyElement.contentRect.width <= 405 && contentAdjustFlag4 === 0) {
          tableRow.firstChild.style.transform = "translateY(0rem)";
          contentAdjustFlag4 = 1;
        } else if (
          bodyElement.contentRect.width > 405 &&
          bodyElement.contentRect.width < 449 &&
          contentAdjustFlag4 === 1
        ) {
          tableRow.firstChild.style.transform = "translateY(0.1rem)";

          contentAdjustFlag4 = 0;
        }
      });
      observer.observe(body);
    }
  });
}

function addTableRow() {
  let buttons = document.querySelectorAll(".orders-item-description-button");
  const itemArray = [];

  const amount = {
    Ferratelle: 1,
    Parrozzo: 1,
    Torrone_Nurzia: 1,
    Bocconotti: 1,
    Zeppole_di_San_Giuseppe: 1,
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let item = button.parentElement.parentElement.children[0].textContent;

      let price = button.parentElement.parentElement.children[2].textContent;
      let tableButton;

      if (!itemArray.includes(item)) {
        itemArray.push(item);
        let itemFlag = true;
        itemArray.push(itemFlag);
      }

      for (let i = 0; i < itemArray.length; i++) {
        if (i % 2 === 0) {
          if (itemArray[i + 1] !== false) {
            let tr = document.createElement("tr");
            tr.classList.add("table-row");

            let itemAmount = amount[`${itemArray[i].replaceAll(" ", "_")}`];

            let td = document.createElement("td");
            let tdText = document.createTextNode(itemArray[i]);
            itemArray[i + 1] = false;
            td.appendChild(tdText);

            tr.appendChild(td);
            td.classList.add("table-data");
            let td2 = document.createElement("td");
            let tdText2 = document.createTextNode(itemAmount.toString());
            td2.appendChild(tdText2);

            tr.appendChild(td2);
            td2.classList.add("table-data");
            let td3 = document.createElement("td");
            let tdText3 = document.createTextNode(price);

            td3.appendChild(tdText3);
            tr.appendChild(td3);
            td3.classList.add("table-data");

            document.querySelector("tbody").appendChild(tr);
          }
        }
      }
      let tableRows = document.querySelectorAll(".table-row");

      tableRows.forEach((tableRow) => {
        tableButton = document.createElement("button");
        tableButton.innerHTML = '<i class="fa-solid fa-x"></i>';
        tableButton.classList.add("table-button");

        let addAmount = document.createElement("button");
        addAmount.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
        addAmount.classList.add("add-amount");

        let subtractAmount = document.createElement("button");
        subtractAmount.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        subtractAmount.classList.add("subtract-amount");

        const addAmountTest = [...tableRow.children].some((e) => {
          return e.classList.contains("add-amount");
        });
        const subtractAmountTest = [...tableRow.children].some((e) => {
          return e.classList.contains("subtract-amount");
        });
        const tableButtonTest = [...tableRow.children].some((e) => {
          return e.classList.contains("table-button");
        });

        if (tableButtonTest === false) {
          tableRow.appendChild(tableButton);
        }

        if (addAmountTest === false) {
          tableRow.appendChild(addAmount);
        }
        if (subtractAmountTest === false) {
          tableRow.appendChild(subtractAmount);
        }
        tableButton.addEventListener("click", function () {
          itemArray.forEach((item, index) => {
            if (index % 2 === 0) {
              if (tableRow.children[0].textContent === item) {
                itemArray.splice(index, 2);

                tableRow.remove();
              }
            }
          });
        });
        addAmount.addEventListener("click", function () {
          for (const property in amount) {
            if (
              property.replaceAll("_", " ") === tableRow.children[0].textContent
            ) {
              if (amount[property] < 50) {
                amount[property]++;
                tableRow.children[1].innerText = amount[property];
              }
            }
          }
        });
        subtractAmount.addEventListener("click", function () {
          for (const property in amount) {
            if (
              property.replaceAll("_", " ") === tableRow.children[0].textContent
            ) {
              if (amount[property] > 1) {
                amount[property]--;

                tableRow.children[1].innerText = amount[property];
              }
            }
          }
        });
      });
      adjustContentPosition();
    });
  });
}

addTableRow();
