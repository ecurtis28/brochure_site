const descriptions = document.querySelectorAll(".description");
const singleDescriptions = document.querySelectorAll(".single-description");
singleDescriptions.forEach((singleDescription) => {
  singleDescription.addEventListener("mouseenter", () => {
    for (let i = 0; i < singleDescription.children.length; i++) {
      singleDescription.children[i].classList.add("fade");

      singleDescription.children[i].classList.remove("brighten");
    }

  
    singleDescription.style.cursor = "pointer";
  });
  singleDescription.addEventListener("mouseleave", () => {
    for (let i = 0; i < singleDescription.children.length; i++) {
      singleDescription.children[i].classList.add("brighten");

      singleDescription.children[i].classList.remove("fade");
    }
  });
});
descriptions.forEach((description) => {
  description.addEventListener("mouseenter", () => {
    description.classList.add("fade");
    description.classList.remove("brighten");
  });
  description.addEventListener("mouseleave", () => {
    description.classList.add("brighten");
    description.classList.remove("fade");
  });
});
