const descriptions = document.querySelectorAll(".description");
const singleDescriptions = document.querySelectorAll(".single-description");
singleDescriptions.forEach((singleDescription) => {
  singleDescription.addEventListener("mouseenter", () => {
    console.log("mouse entering paragraph");
    for (let i = 0; i < singleDescription.children.length; i++) {
      singleDescription.children[i].classList.add("fade");

      singleDescription.children[i].classList.remove("brighten");
    }

    // const descriptionOne = singleDescription.children[0];
    // const descriptionTwo = singleDescription.children[1];
    // descriptionOne.classList.add("fade");
    // descriptionOne.classList.remove("brighten");
    // descriptionTwo.classList.add("fade");
    // descriptionTwo.classList.remove("brighten");
    singleDescription.style.cursor = "pointer";
  });
  singleDescription.addEventListener("mouseleave", () => {
    console.log("mouse leaving paragraph");
    for (let i = 0; i < singleDescription.children.length; i++) {
      singleDescription.children[i].classList.add("brighten");

      singleDescription.children[i].classList.remove("fade");
    }

    //  const descriptionOne = singleDescription.children[0];
    // const descriptionTwo = singleDescription.children[1];
    // const descriptionThre = singleDescription.children[2]
    // descriptionOne.classList.add("brighten");
    // descriptionOne.classList.remove("fade");
    // descriptionTwo.classList.add("brighten");
    // descriptionTwo.classList.remove("fade");
  });
});
descriptions.forEach((description) => {
  console.log(description);
  description.addEventListener("mouseenter", () => {
    console.log("mouse entering paragraph");
    description.classList.add("fade");
    description.classList.remove("brighten");
  });
  description.addEventListener("mouseleave", () => {
    console.log("mouse leaving paragraph");
    description.classList.add("brighten");
    description.classList.remove("fade");
  });
});
