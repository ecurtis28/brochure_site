const images = document.querySelectorAll(".dish-gallery-img-container");

images.forEach((image) => {
  const dishGalleryTitleElement = image.children[1];
  const dishGalleryBackdropElement = image.children[2];
  const dishGalleryTitleObject =
    dishGalleryTitleElement.getBoundingClientRect();

  let dishGalleryBackdropWidth = dishGalleryTitleObject.width + 21;
  dishGalleryBackdropWidth = dishGalleryBackdropWidth.toString() + "px";
  // console.log(dishGalleryBackdropElement.style.width);
  dishGalleryBackdropElement.style.width = dishGalleryBackdropWidth;
  image.addEventListener("mouseenter", () => {
    console.log("mouse entering image");

    const dishGalleryTitle = image.children[1].classList;

    const dishGalleryBackdrop = image.children[2].classList;

    dishGalleryTitle.add("show-fog");
    dishGalleryTitle.remove("hide-fog");
    dishGalleryBackdrop.add("show-fog");
    dishGalleryBackdrop.remove("hide-fog");
  });
  image.addEventListener("mouseleave", () => {
    console.log("mouse leaving image");

    const dishGalleryTitle = image.children[1].classList;
    const dishGalleryBackdrop = image.children[2].classList;

    dishGalleryTitle.add("hide-fog");
    dishGalleryTitle.remove("show-fog");
    dishGalleryBackdrop.add("hide-fog");
    dishGalleryBackdrop.remove("show-fog");
  });
});
