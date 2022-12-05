const images = document.querySelectorAll(".dish-gallery-img-container");

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    console.log("mouse entering image");

    const dishGalleryTitle = image.children[1].classList;

    dishGalleryTitle.add("show-fog");
    dishGalleryTitle.remove("hide-fog");
  });
  image.addEventListener("mouseleave", () => {
    console.log("mouse leaving image");
    const dishGalleryTitle = image.children[1].classList;

    dishGalleryTitle.add("hide-fog");
    dishGalleryTitle.remove("show-fog");
  });
});
