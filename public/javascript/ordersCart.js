let buttons = document.querySelectorAll(".orders-item-description-button");
const itemArray = [];

const amount = {
  Ferratelle: 1,
  Parrozzo: 1,
  Torrone_Nurzia: 1,
  Bocconotti: 1,
  Zeppole_di_San_Giuseppe: 1,
};

console.log(buttons);
// document.querySelectorAll('.some-class').forEach(item => {
//     item.addEventListener('click', event => {
//       //handle click
//     })
//   })
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let item = button.parentElement.parentElement.children[0].textContent;

    let price = button.parentElement.parentElement.children[2].textContent;
    console.log(price);
    console.log(button.parentElement.parentElement.children[0].textContent);
    let tableButton;
    // console.log(amount[`${item.replaceAll(" ", "_")}`], item);

    if (!itemArray.includes(item)) {
      itemArray.push(item);
      let itemFlag = true;
      itemArray.push(itemFlag);
      console.log(itemArray);
    }

    for (let i = 0; i < itemArray.length; i++) {
      if (i % 2 === 0) {
        if (itemArray[i + 1] !== false) {
          let tr = document.createElement("tr");
          tr.classList.add("table-row");
          // tr.classList.add(`table-data-row table-row-${i + 1}`)
          console.log(
            amount[`${itemArray[i].replaceAll(" ", "_")}`],
            itemArray[i]
          );
          let itemAmount = amount[`${itemArray[i].replaceAll(" ", "_")}`];

          let td = document.createElement("td");
          let tdText = document.createTextNode(itemArray[i]);
          itemArray[i + 1] = false;
          td.appendChild(tdText);
          console.log(td);
          tr.appendChild(td);
          td.classList.add("table-data");
          let td2 = document.createElement("td");
          let tdText2 = document.createTextNode(itemAmount.toString());
          td2.appendChild(tdText2);
          console.log(td2);
          tr.appendChild(td2);
          td2.classList.add("table-data");
          let td3 = document.createElement("td");
          let tdText3 = document.createTextNode(price);

          console.log(td3);
          td3.appendChild(tdText3);
          tr.appendChild(td3);
          td3.classList.add("table-data");

          document.querySelector("tbody").appendChild(tr);

          // element = tr.children[3]
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

  
      if (tableButtonTest === false ) {
        tableRow.appendChild(tableButton);
      }

      if (addAmountTest === false) {tableRow.appendChild(addAmount)}
      if (subtractAmountTest === false) {tableRow.appendChild(subtractAmount)}
      tableButton.addEventListener("click", function () {
        console.log("clicked");
        itemArray.forEach((item, index) => {
          if (index % 2 === 0) {
            if (tableRow.children[0].textContent === item) {
              itemArray.splice(index, 2);
              console.log(itemArray);
              tableRow.remove();
            }
            console.log(tableRow.children[0].textContent);
          }
        });
      });
      addAmount.addEventListener("click", function () {
        for (const property in amount) {
          console.log(
            property,
            tableRow.children[0].textContent,
            amount[property]
          );
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
          console.log(
            property,
            tableRow.children[0].textContent,
            amount[property]
          );
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
  });
});

//<tr class="table-data-row table-row-1">
// <td>Test1</td>
// <td>Test2</td>
// <td>Test3<span><button class="table-button"><i class="fa-solid fa-x"></i></button></span></td>

// </tr>
